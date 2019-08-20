import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

import Libros from './compoenents/libros/Libros'
import MostrarLibro from './compoenents/libros/MostrarLibro'
import NuevoLibro from './compoenents/libros/NuevoLibro'
import EditarLibro from './compoenents/libros/EditarLibro'
import PrestamoLibro from './compoenents/libros/PrestamoLibro'

import Suscriptores from './compoenents/suscriptors/Suscriptores'
import MostrarSuscriptor from './compoenents/suscriptors/MostrarSuscriptor'
import EditarSuscriptor from './compoenents/suscriptors/EditarSuscriptor'
import NuevoSuscriptor from './compoenents/suscriptors/NuevoSuscriptor'
import Navbar from './compoenents/layout/Navbar'
import Login from './compoenents/auth/Login'

import { UserIsAuthenticated, UserIsNotAuthenticated} from './helpers/auth'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/login" component={UserIsNotAuthenticated(Login)}/>

            <Route exact path="/" component={UserIsAuthenticated(Libros)}/>
            <Route exact path="/libros/mostrar/:id" component={UserIsAuthenticated(MostrarLibro)}/>
            <Route exact path="/libros/nuevo" component={UserIsAuthenticated(NuevoLibro)}/>
            <Route exact path="/libros/editar/:id" component={UserIsAuthenticated(EditarLibro)}/>
            <Route exact path="/libros/prestamo/:id" component={UserIsAuthenticated(PrestamoLibro)}/>
            
            <Route exact path="/suscriptores" component={UserIsAuthenticated(Suscriptores)}/>
            <Route exact path="/suscriptores/nuevo" component={UserIsAuthenticated(NuevoSuscriptor)}/>
            <Route exact path="/suscriptores/mostrar/:id" component={UserIsAuthenticated(MostrarSuscriptor)}/>
            <Route exact path="/suscriptores/editar/:id" component={UserIsAuthenticated(EditarSuscriptor)}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
