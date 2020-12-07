import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/** Components */
import { NavBar } from '../ui/NavBar';
import { LoginPage } from "../login/LoginPage";
import { MarvelPage } from "../marvel/MarvelPage";
import { DcPage } from "../dc/DcPage";

/** Main Router */
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/login" component={ LoginPage } />
                    <Route exact path="/dc" component={ DcPage } />
                    <Route exact path="/marvel" component={ MarvelPage } />
                    <Route exact path="/" component={ MarvelPage } />
                        
                </Switch>
            </div>
        </Router>
    )
}
