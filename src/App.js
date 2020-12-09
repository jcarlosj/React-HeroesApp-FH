import { useReducer, useEffect } from "react";

/** Router */
import { AppRouter } from "./routers/AppRouter";

/** Reducer */
import { authReducer } from "./auth/authReducer";

/** Context */
import { AuthContext } from "./auth/AuthContext";

/** Obtiene localStorage o establece valores por defecto */
const init = () => {
    return JSON.parse( localStorage.getItem( 'user' ) ) || {
        logged: false
    };
}

/** Functional Component */
const App = () => {

    const [ user, dispatch ] = useReducer( authReducer, {}, init );     //  Implementa Reducer de Autenticacion

    useEffect( () => {
        localStorage.setItem( 'user', JSON.stringify( user ) );    //  Guarda los datos del usuario en el LocalStorage
    }, [ user ] );

    return (
        <AuthContext.Provider value={{      //  Hace disponible las propiedades y funciones del reducer en todo el árbol de componentes de la aplicación
            user,                           //  State del Reducer
            dispatch
        }}>
            <AppRouter />
        </AuthContext.Provider>
    );
}

export default App;
