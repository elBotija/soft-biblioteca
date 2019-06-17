import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Suscriptores from './compoenents/suscriptors/Suscriptores'
import MostrarSuscriptor from './compoenents/suscriptors/MostrarSuscriptor'
import EditarSuscriptor from './compoenents/suscriptors/EditarSuscriptor'
import NuevoSuscriptor from './compoenents/suscriptors/NuevoSuscriptor'
import Navbar from './compoenents/layout/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path="/suscriptores" component={Suscriptores}/>
          <Route exact path="/suscriptores/nuevo" component={NuevoSuscriptor}/>
          <Route exact path="/suscriptores/mostrar/:id" component={MostrarSuscriptor}/>
          <Route exact path="/suscriptores/editar/:id" component={EditarSuscriptor}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
