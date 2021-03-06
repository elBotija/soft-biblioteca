import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'

class MostrarLibro extends Component {

    _prestarLibro(disponibles, id){
        if(disponibles > 0 ){
            return(
                <Link to={`/libros/prestamo/${id}`} className="btn btn-success my-3">
                    Solicitar Prestamo
                </Link>
            )
        }
    }

    _devolverLibro(suscriptorId) {
        const { firestore } = this.props
        let libroActualizado = {...this.props.libro}
        const prestados = libroActualizado.prestados.filter(l => l.codigo !== suscriptorId )
        libroActualizado.prestados = prestados
        
        firestore.update({
            collection: 'libros',
            doc: libroActualizado.id
        }, libroActualizado)
    }

    _mostrarPrestados(prestados){
        if(prestados.length){
            return (
                <React.Fragment>
                    <h2 className="mb-4">Prestados</h2>
                    {prestados.map(prestado => (
                        <div key={prestado.codigo} className="col-md-6 col-sm-12">
                            <div className="card my-2">
                                <h4 className="card-header">
                                    {prestado.nombre} {prestado.apellido}
                                </h4>
                                <div className="card-body">
                                    <p>
                                        <span className="font-weight-bold">
                                            Carrera:
                                        </span>{' '}
                                        {prestado.carrera}
                                    </p>
                                    <p>
                                        <span className="font-weight-bold">
                                            Fecha Solicitud:
                                        </span>{' '}
                                        {prestado.fechaSolicitud}
                                    </p>
                                    <p>
                                        <span className="font-weight-bold">
                                            Código:
                                        </span>{' '}
                                        {prestado.codigo}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <button 
                                        type="button" 
                                        className="btn btn-success font-weight-bold"
                                        onClick={() => this._devolverLibro(prestado.codigo)}
                                    >
                                        Realizar Devolución
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </React.Fragment>
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
                            <span className="font-weight-bold">
                                ISBN:
                            </span>{' '}
                            {libro.ISBN}
                        </p>
                        <p>
                            <span className="font-weight-bold">
                                Editorial:
                            </span>{' '}
                            {libro.editorial}
                        </p>
                        <p>
                            <span className="font-weight-bold">
                                Existencia:
                            </span>{' '}
                            {libro.existencia}
                        </p>
                        <p>
                            <span className="font-weight-bold">
                                Disponibles:
                            </span>{' '}
                            { disponibles }
                        </p>
                        {this._prestarLibro(disponibles, libro.id)}
                        {this._mostrarPrestados(libro.prestados)}
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
