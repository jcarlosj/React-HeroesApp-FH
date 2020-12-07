import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/** Router */
import { DashboardRouter } from "./DashboardRouter";

/** Components */
import { LoginPage } from "../login/LoginPage";

/** Main Router: Functional Component */
export const AppRouter = () => {
    return (
        <Router>
            <div>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>

                    <Route exact path="/login" component={ LoginPage } />
                    <Route path="/" component={ DashboardRouter } />
                        
                </Switch>
            </div>
        </Router>
    )
}
