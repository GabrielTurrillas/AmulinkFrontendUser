import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';

import Pacientes from './containers/pacientes/Pacientes';
import PacienteDashBoard from './containers/pacientes/PacienteDashBoard';
import FichaPaciente from './containers/pacientes/FichaPaciente';
import Home from './containers/Home';
import Login from './containers/accounts/Login';
import Signup  from './containers/accounts/Signup';
import Activate from './containers/accounts/Activate';
import ResetPassword from './containers/accounts/ResetPassword';
import ResetPasswordConfirm from './containers/accounts/ResetPasswordConfirm';
import RegistroSesion from './containers/pacientes/RegistroSesion';
import FichaSesion from './containers/pacientes/FichaSesion';
import Perfil from './containers/terapeuta/Perfil';
import Layout from './hocs/Layout';
import ModificarPerfil from './containers/terapeuta/ModificarPerfil';
import ResumenMensual from './containers/informes/ResumenMensual';
import ModificarSesion from './containers/pacientes/ModificarSesion';
import PacienteListaTodosContainer from './containers/pacientes/PacienteListaTodosContainer';

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/pacientes' component={Pacientes} />
                    <Route exact path='/listaPacientesTodos' component={PacienteListaTodosContainer} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/reset-password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route exact path='/activate/:uid/:token' component={Activate} />
                    <Route exact path='/pacientes/:id' component={PacienteDashBoard} />
                    <Route exact path='/pacientes/ficha_paciente/:id' component={FichaPaciente} />
                    <Route exact path='/pacientes/registro_sesion/:id' component={RegistroSesion} />
                    <Route exact path='/pacientes/ficha_sesion/:id' component={FichaSesion} />
                    <Route exact path='/perfil' component={Perfil} />
                    <Route exact path='/modificar_perfil' component={ModificarPerfil} />
                    <Route exact path='/resumen_mensual' component={ResumenMensual} />
                    <Route exact path='/modificar_sesion/:id' component={ModificarSesion} />
                </Switch>
            </Layout>
        </Router>
    </Provider>
);


export default App;
