import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./views/home";
import Registration from './components/registration';
import Aide from "./views/aide";


// Création de parcours pour les différentes pages.
export default () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/enregistrer/:surname?" component={Registration} />
            <Route exact path="/aide" component={Aide} />
        </Switch>
    )
}
