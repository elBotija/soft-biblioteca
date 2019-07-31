import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'

class MostrarLibro extends Component {

    _prestarLibro(disponibles, id){
        if(disponibles > 0){
            return(
                <Link to={`/libros/prestamo/${id}`} className="btn btn-success my-3">
                    Solicitar Prestamo
                </Link>
            )
        }
    }

    render() { 
        const { libro } = this.props
        if(libro){
            let disponibles = libro.existencia - libro.prestados.length
        
            return (
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <Link to="/" className="btn btn-secondary">
                            <i className="fas fa-arrow-circle-left"></i>{' '}
                            Volver al Listado
                        </Link>
                    </div>
                    <div className="col-md-6 mb-4">
                        <Link to={`/libros/editar/${libro.id}`} className="btn btn-secondary float-right">
                            <i className="fas fa-pencil-alt"></i>{' '}
                            Editar
                        </Link>
                    </div>
                    <hr className="mx-5 w-100"/>
                    <div className="col-12">
                        <h2 className="mb-4">{libro.titulo}</h2>
                        <p>
                            <span className="font-wight-bold">
                                ISBN:
                            </span>{' '}
                            {libro.ISBN}
                        </p>
                        <p>
                            <span className="font-wight-bold">
                                Editorial:
                            </span>{' '}
                            {libro.editorial}
                        </p>
                        <p>
                            <span className="font-wight-bold">
                                Existencia:
                            </span>{' '}
                            {libro.existencia}
                        </p>
                        <p>
                            <span className="font-wight-bold">
                                Disponibles:
                            </span>{' '}
                            { disponibles }
                        </p>
                        {this._prestarLibro(disponibles, libro.id)}
                    </div>
                </div>    
            )
        }
        return <Spinner/>
    }
}

MostrarLibro.propTypes = {
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
)(MostrarLibro); 
