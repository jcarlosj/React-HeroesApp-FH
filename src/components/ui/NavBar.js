import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';

/** Contexts */
import { AuthContext } from '../../auth/AuthContext';

/** Types */
import { types } from '../../types/types';

/** Functional Component */
export const NavBar = () => {

    const 
        { user: { name }, dispatch } = useContext( AuthContext ),
        history = useHistory();         //  Este Hook de React obtiene el history de acuerdo al contexto implicito que abraza este componente

    const handleLogout = () => {
        dispatch({
            type: types.logout,
            payload: null
        });

        setTimeout( () => {
            history.replace( '/login' );        //  Redirecciona a '/' y Reemplaza la entrada actual en la pila del historial, en nuestro caso '/login' ruta de este Page Component
        }, 1500 );
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Heroes
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <div className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-white">Hola, { name }</span>

                    <button 
                        activeClassName="active"
                        className="btn btn-light" 
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>

                </div>
            </div>
        </nav>
    )
}
