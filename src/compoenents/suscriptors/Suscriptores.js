import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

const Suscriptores = ({suscriptores, firestore}) => {
    if(!suscriptores) return <Spinner/>
    
    const _eliminarSuscriptor = id => {
        //eliminar
        firestore.delete({
            collection: 'suscriptores',
            doc : id
        })
    }
    
    return ( 
        <div className="row">
            <div className="col-md-12 mb-4">
                <Link to={'/suscriptores/nuevo'} className="btn btn-primary"> <i className="fas fa-plus mr-2"></i>Nuevo suscriptor</Link>
            </div>
            <div className="col-md-8">
                <h2>
                    <i className="fas fa-users mr-2"></i>Suscriptores
                </h2>
            </div>
            <table className="table table-striped mt-4">
                <thead className="text-light bg-primary">
                    <tr>
                        <th>Nombre</th>
                        <th>Carrera</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {suscriptores.map(s => (
                        <tr key={s.id}>
                            <td>{s.nombre} {s.apellido}</td>
                            <td>{s.carrera}</td>
                            <td className="d-flex justify-content-center">
                                <Link 
                                    to={`/suscriptores/mostrar/${s.id}`}
                                    className="btn btn-success btn-block mr-2"
                                >
                                    <i className="fas fa-angle-double-right mr-2"></i>
                                    Más info
                                </Link>
                                <button onClick={() => _eliminarSuscriptor(s.id)} type="button" className="btn btn-danger btn-block mt-0">
                                    <i className="fas fa-trash-alt mr-2"></i>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
Suscriptores.propTypes = {
    firestore: PropTypes.object.isRequired,
    suscriptores: PropTypes.array
}

export default compose(
    firestoreConnect([{ collection : 'suscriptores' }]),
    connect((state, props)=>({
      suscriptores : state.firestore.ordered.suscriptores
    }))
)(Suscriptores);