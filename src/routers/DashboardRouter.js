import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

/** Components */
import { NavBar } from '../components/ui/NavBar';
import { MarvelPage } from "../components/marvel/MarvelPage";
import { DcPage } from "../components/dc/DcPage";
import { HeroPage } from "../components/heroes/HeroPage";

/** Secondary Router: Functional Component */
export const DashboardRouter = () => {
    return (
        <>
            <NavBar />
            <div>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>

                    <Route exact path="/dc" component={ DcPage } />
                    <Route exact path="/marvel" component={ MarvelPage } />
                    <Route exact path="/hero/:hero_id" component={ HeroPage } />
                    <Redirect to path="/marvel" />
                        
                </Switch>
            </div>
        </>
    )
}
