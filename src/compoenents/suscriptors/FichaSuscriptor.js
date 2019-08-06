import React from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

const FichaSuscriptor = ({alumno}) => {
    if(alumno){
        return ( 
            <div className="card my-3">
                <h3 className="card-header bg-primary text-white">Datos Solicitante</h3>
                <div className="card-body">
                    <p className="font-weight-bold">Nombre: {' '}
                        <span className="font-weight-normal">{alumno.nombre} {alumno.apellido}</span>
                    </p>
                    <p className="font-weight-bold">Carrera: {' '}
                        <span className="font-weight-normal">{alumno.carrera}</span>
                    </p>
                    <p className="font-weight-bold">codigo: {' '}
                        <span className="font-weight-normal">{alumno.codigo}</span>
                    </p>

                </div>
            </div>
        )
    }

    return(
        <Spinner/>
    )
}

FichaSuscriptor.propTypes = {
    alumno: PropTypes.object.isRequired
}
 
export default FichaSuscriptor