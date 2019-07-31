import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'

class EditarLibro extends Component {
    state = { 
        saveText: 'Guardar Cambios' 
    }

    tituloRef = React.createRef()
    editorialRef = React.createRef()
    ISBNRef = React.createRef()
    existenciaRef = React.createRef()
    
    _saveChanges = e => {
        e.preventDefault()
        this.setState({saveText: 'Guardando...'})
        const libroActualizado = {
            titulo: this.tituloRef.current.value,
            editorial: this.editorialRef.current.value,
            ISBN: this.ISBNRef.current.value,
            existencia: this.existenciaRef.current.value
        }
        const { firestore, history, libro } = this.props
        firestore.update(
            {
                collection: 'libros',
                doc: libro.id
            },libroActualizado).then(history.push('/'))
        
    }

    render() { 
        const { libro } = this.props
        
        if(libro){
            const { titulo, editorial, ISBN, existencia } = libro
            return (
                <div className="row">
                    <div className="col-12 mb-4">
                        <Link to={'/'} className="btn btn-secondary">
                            <i className="fas fa-arrow-circle-left"></i>{' '}
                            Volver al listado
                        </Link>
                    </div>
                    <div className="col-12">
                        <h2>
                            <i className="fas fa-book"></i> {' '}
                            Editar Libro
                        </h2>
                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-5">
                                <form onSubmit={this._saveChanges}>
                                    <div className="form-group">
                                        <label>Titulo:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="titulo"
                                            placeholder="Titulo del Libro"
                                            required
                                            ref={this.tituloRef}
                                            defaultValue={titulo}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Editorial:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="editorial"
                                            placeholder="Editorial del Libro"
                                            required
                                            ref={this.editorialRef}
                                            defaultValue={editorial}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>ISBN:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="ISBN"
                                            placeholder="ISBN"
                                            required
                                            ref={this.ISBNRef}
                                            defaultValue={ISBN}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Existencia:</label>
                                        <input 
                                            type="number"
                                            min="0"
                                            className="form-control"
                                            name="existencia"
                                            placeholder="Cantidad en existencia"
                                            required
                                            ref={this.existenciaRef}
                                            defaultValue={existencia}
                                        />
                                    </div>
                                    <input type="submit" value={this.state.saveText} className="btn btn-success"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return <Spinner/>
    }
}

EditarLibro.propTypes = {
    firestore: PropTypes.object.isRequired
}

export default compose(
    firestoreConnect( props => [
        {
            collection: 'libros',
            storeAs: 'libro',
            doc: props.match.params.id
        }
    ]),
    connect(({ firestore: { ordered }}, props) => ({
        libro: ordered.libro && ordered.libro[0]
    }))
)(EditarLibro);
