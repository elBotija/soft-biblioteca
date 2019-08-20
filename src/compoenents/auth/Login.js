import React, { Component } from 'react';
import { firebaseConnect } from 'react-redux-firebase'
import {compose} from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Login extends Component {
    state = { 
        mail: "",
        pass: ""
    }

    _leerDato = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }    

    _iniciarSesion = e => {
        e.preventDefault()
        const {firebase,history} = this.props
        const {mail,pass} = this.state

        firebase.login({
            email:mail, 
            password: pass
        }).then(res => 
            history.push('/')
        ).catch(err => console.error("Hubo un error de auth"))
    }

    render() { 
        return ( 
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h2 className="text-center py-4">
                                <i className="fas fa-lock"></i> {' '}
                                Iniciar Sesión
                            </h2>
                            <form onSubmit={this._iniciarSesion}>
                                <div className="form-group">
                                    <label>Mail</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        name="mail"
                                        required
                                        value={this.state.mail}
                                        onChange={this._leerDato}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Contraseña</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="pass"
                                        required
                                        value={this.state.pass}
                                        onChange={this._leerDato}
                                    />
                                </div>
                                <input type="submit" className="btn btn-success btn-block" value="Iniciar Sesion"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    firebase: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}
 
export default compose(
    firebaseConnect(),
    connect((state,props) => ({
        auth: state.firebase.auth
    }))
)(Login);