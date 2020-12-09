import React, { useContext } from 'react';

/** Contexts */
import { AuthContext } from '../../auth/AuthContext';

/** Types */
import { types } from '../../types/types';

/** Functional Component */
export const LoginPage = ({ history }) => {

    const 
        authContext = useContext( AuthContext ),
        { user, dispatch } = authContext,
        loggedUser = { 
            id: new Date().getTime(),
            name: "Eva Sofia", 
            email: "eva.sofia@correo.co" 
        };

    const handleLogin = () => {

        const 
            defaultRoute = { pathname: '/', search: '' },
            lastRoute = !! JSON.parse( localStorage.getItem( 'last_route' ) ) ? JSON.parse( localStorage.getItem( 'last_route' ) ) : defaultRoute; 

        console.log( 'lastRoute', lastRoute.pathname );
        
        dispatch({
            type: types.login,
            payload: loggedUser
        });

        setTimeout( () => {
            history.replace( lastRoute.pathname );        //  Redirecciona a '/' y Reemplaza la entrada actual en la pila del historial, en nuestro caso '/login' ruta de este Page Component
        }, 1500 );
    }

    return (
        <section className="container mt-5 mb-5">
            <h1>Login</h1>
            <hr />

            {   user.logged && <pre><b>logged user</b> { JSON.stringify( user, null, 3 ) }</pre> }

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >Login</button>

        </section>
    )
}
