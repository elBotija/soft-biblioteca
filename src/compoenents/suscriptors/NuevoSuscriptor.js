import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import  Spinner  from '../layout/Spinner'
import PropTypes from 'prop-types'

class NuevoSuscriptor extends Component {
    state = { 
        form: {
            nombre: '',
            apellido: '',
            carrera: '',
            codigo: ''
        },
        pending: false
    }

    _agregarSuscriptor = e => { 
        e.preventDefault()
        this.setState({ pending:true })
        //extraer valores
        const nuevoSuscriptor = { ...this.state.form }
        // extraer firestore de props
        const { firestore, history } = this.props
        // guardar en base
        firestore.add({collection: 'suscriptores'}, nuevoSuscriptor)
        .then(()=>{
            history.push('/suscriptores')
        })
    }

    _handlerInput(e){
        e.preventDefault()
        let form = { ...this.state.form }
        form[e.target.name]= e.target.value
        this.setState({ form })
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
                        <i className="fas fa-user-plus mr-2"></i>
                        Nuevo Suscriptor
                    </h2>
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <form onSubmit={this._agregarSuscriptor}>
                                <div className="form-group">
                                    <label>Nombre:</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="nombre"
                                        placeholder="Nombre del Suscriptor"
                                        required
                                        onChange={(e)=>this._handlerInput(e)}
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
                                        onChange={(e)=>this._handlerInput(e)}
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
                                        onChange={(e)=>this._handlerInput(e)}
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
                                        onChange={(e)=>this._handlerInput(e)}
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
}
 
NuevoSuscriptor.propTypes = {
    firestore : PropTypes.object.isRequired
}

export default firestoreConnect()(NuevoSuscriptor);