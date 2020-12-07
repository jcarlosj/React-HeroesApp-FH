import React from 'react';

/** Functional Component */
export const LoginPage = ({ history }) => {

    const handleLogin = () => {
        history.replace( '/' );        //  Redirecciona a '/' y Reemplaza la entrada actual en la pila del historial, en nuestro caso '/login' ruta de este Page Component
    }

    return (
        <section className="container mt-5 mb-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >Login</button>

        </section>
    )
}
