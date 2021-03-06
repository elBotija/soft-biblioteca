import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'

import FichaSuscriptor from '../suscriptors/FichaSuscriptor'

import { buscarUsuario } from '../../actions/buscarUsuarioActions'

class PrestamoLibro extends Component {
    state = { 
        resBusqueda:{},
        noResultados: false
     }
    
    busquedaRef = React.createRef()
    
    _buscarAlumno = e => {
        e.preventDefault()
        const busqueda = this.busquedaRef.current.value

        const { firestore, buscarUsuario } = this.props
        const coleccion = firestore.collection('suscriptores')
        const consulta = coleccion.where('codigo','==',busqueda).get()
        consulta.then(res => {
            let resBusqueda = {}
            let noResultados = true
            if(!res.empty){
                resBusqueda = res.docs[0].data()
                noResultados = false
            }
            buscarUsuario(resBusqueda)
            this.setState({
                noResultados
            })
        })
    }
    
    _solicitarPrestamo = () => {
        const usuario = this.props.usuario
        usuario.fechaSolicitud = new Date().toLocaleDateString()
        

        const libroActualizado = {...this.props.libro}
        libroActualizado.prestados = [...libroActualizado.prestados, usuario] 
    
        const { firestore, history } = this.props

        firestore.update({
            collection: 'libros',
            doc: libroActualizado.id
        }, libroActualizado).then(history.push('/'))
    }

    _renderPrestamo = () => {
        const { usuario } = this.props
        if(usuario.nombre){
            const { libro } = this.props
            const tieneCopia = libro.prestados.find(l => {
                let res
                if(l.id === usuario.id){ res = l }
                return res
            }) || []
            debugger
            const noDisponible = (this.props.libro.prestados && (libro.prestados.length === libro.existencia))  || tieneCopia.length !== 0 ? true : false
            return (
                <React.Fragment>
                    <FichaSuscriptor alumno={usuario}/>
                    
                    <button type="button"
                        className={`btn btn-block ${noDisponible ? "btn-light":'btn-primary'}`}
                        onClick={noDisponible ? '' : this._solicitarPrestamo}>
                            Solicitar Prestamo
                    </button>
                </React.Fragment>
            )
        }
    }

    _noResultados(){
        if(this.state.noResultados){
            return(
                <div className="alert alert-danger text-center font-wight-bold">No hay resultados para ese codigo.</div>
            )
        }
    }

    render() { 
        const { libro } = this.props

        if(libro){
            return ( 
                <div className="row">
                    <div className="col-12 mb-4">
                        <Link to={'/'} className="btn btn-secondary">
                            <i className="fas fa-arrow-circle-left"></i>{' '}
                            Volver al Listado
                        </Link>
                    </div>
                    <div className="col-12">
                        <h2><i className="fas fa-book"></i>{' '} Solicitar Prestamo: {libro.titulo}</h2>

                        <div className="row justify-content-center mt-5">
                            <div className="col-md-8">
                                <form onSubmit={this._buscarAlumno} className="mb-4">
                                    <legend className="color-primary text-center">
                                        Busca el Suscriptor por Código
                                    </legend>
                                    <div className="form-group">
                                        <input type="text"
                                            name="busqueda"
                                            className="form-control mb-4"
                                            ref={this.busquedaRef}
                                        />
                                        <input value="Buscar alumno" type="submit" className="btn btn-success btn-block"/>
                                    </div>
                                </form>
                                {this._renderPrestamo()}
                                {this._noResultados()}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return <Spinner/>
    }
}

PrestamoLibro.propTypes = {
    firestore: PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(props => [
        {
            collection : 'libros',
            storeAs: 'libro',
            doc: props.match.params.id
        }
    ]),
    connect(({firestore: { ordered }, usuario}, props ) => ({
        libro: ordered.libro && ordered.libro[0],
        usuario: usuario
    }), { buscarUsuario })
)(PrestamoLibro)
