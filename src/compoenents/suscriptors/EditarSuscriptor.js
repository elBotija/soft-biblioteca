import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner' 

class EditarSuscriptor extends Component {
    state = {  }

    nombreRef = React.createRef()
    apellidoRef = React.createRef()
    carreraRef = React.createRef()
    codigoRef = React.createRef()

    _editarSuscriptor = e => {
        e.preventDefault()

        const suscriptorActualizado = {
            nombre: this.nombreRef.current.value,
            apellido: this.apellidoRef.current.value,
            carrera: this.carreraRef.current.value,
            codigo: this.codigoRef.current.value
        }

        // extraer firestore y history de props
        const { suscriptor, firestore, history } = this.props

        firestore.update({
            collection: 'suscriptores',
            doc: suscriptor.id
        }, suscriptorActualizado ).then(history.push('/suscriptores'))
    }

    _toggleSubmit(){
        if(this.state.pending) return <Spinner/>
        return(
            <input 
                type="submit"
                value="Agregar Suscriptor"
                className="btn btn-success"
            />
        )
    }

    render() { 
        const { suscriptor } = this.props

        if(suscriptor){
            return ( 
                <div className="row">
                    <div className="col-12 mb-4">
                        <Link to={'/suscriptores'} className="btn btn-secondary">
                            <i className="fas fa-arrow-circle-left mr-2"></i>
                            Volver al listado
                        </Link>
                    </div>
                    <div className="col-12">
                        <h2>
                            Editar Suscriptor
                        </h2>
                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-5">
                                <form onSubmit={this._editarSuscriptor}>
                                    <div className="form-group">
                                        <label>Nombre:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="nombre"
                                            placeholder="Nombre del Suscriptor"
                                            required
                                            ref={this.nombreRef}
                                            defaultValue={suscriptor.nombre}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Apellido:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="apellido"
                                            placeholder="Apellido del Suscriptor"
                                            required
                                            ref={this.apellidoRef}
                                            defaultValue={suscriptor.apellido}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Carrera:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="carrera"
                                            placeholder="Carrera del Suscriptor"
                                            required
                                            ref={this.carreraRef}
                                            defaultValue={suscriptor.carrera}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Codigo:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="codigo"
                                            placeholder="Codigo del Suscriptor"
                                            required
                                            ref={this.codigoRef}
                                            defaultValue={suscriptor.codigo}
                                        />
                                    </div>
                                    { this._toggleSubmit() }
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

EditarSuscriptor.propTypes = {
    firestore: PropTypes.object.isRequired
}

 export default compose(
    firestoreConnect(props => [
        {
            collection: 'suscriptores',
            storeAs: 'suscriptor',
            doc: props.match.params.id
        }
    ]),
    connect(({ firestore: {ordered}}, props) => ({
        suscriptor: ordered.suscriptor && ordered.suscriptor[0]
    }))
 )(EditarSuscriptor);

