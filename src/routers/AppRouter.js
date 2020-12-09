import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

/** Router */
import { DashboardRouter } from "./DashboardRouter";

/** Components */
import { LoginPage } from "../components/login/LoginPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

/** Contexts */
import { AuthContext } from "../auth/AuthContext";

/** Main Router: Functional Component */
export const AppRouter = () => {

    const { user: { logged } } = useContext( AuthContext );

    return (
        <Router>
            <div>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>

                    <PublicRoute 
                        isAuthenticated={ logged }      //  Autenticacion (true/false): Propiedad definida esperada
                        component={ LoginPage }         //  Router: Propiedad definida esperada
                        exact path="/login"             //  Ruta para la que se define el acceso privado (Esto afectara a todas las rutas hijas del Router)
                    />
                    <PrivateRoute 
                        isAuthenticated={ logged }      //  Autenticacion (true/false): Propiedad definida esperada
                        component={ DashboardRouter }   //  Router: Propiedad definida esperada
                        path="/"                        //  Ruta para la que se define el acceso privado (Esto afectara a todas las rutas hijas del Router)
                    />
                        
                </Switch>
            </div>
        </Router>
    )
}
