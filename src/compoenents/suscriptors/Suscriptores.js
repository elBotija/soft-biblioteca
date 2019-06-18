import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'

const Suscriptores = ({suscriptores}) => {
    if(!suscriptores) return <Spinner/>
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
                            <td>
                                <Link 
                                    to={`/suscriptores/mostrar/${s.id}`}
                                    className="btn btn-success btn-block"
                                >
                                    <i className="fas fa-angle-double-right mr-2"></i>
                                    Más info
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default compose(
    firestoreConnect([{ collection : 'suscriptores' }]),
    connect((state, props)=>({
      suscriptores : state.firestore.ordered.suscriptores
    }))
)(Suscriptores);