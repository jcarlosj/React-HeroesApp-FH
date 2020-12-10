import '@testing-library/jest-dom';

/** Reducer */
import { authReducer } from '../../auth/authReducer';

/** Types */
import { types } from '../../types/types';

describe( 'authReducer Reducer', () => {

    test( 'debe retornar state por defecto', () => {

        const 
            initialState = { 
                logged: false
            },
            state = authReducer( initialState, {} );

        // console.log( state );
        expect( state ).toEqual( initialState );

    } );

    test( 'debe autenticar y agregar datos del usuario al state', () => {

        const 
            initialState = { 
                logged: false
            },
            action = {
                type: types.login,
                payload: { 
                    id: new Date().getTime(),
                    name: "Ana Maria", 
                    email: "ana.maria@correo.co" 
                }
            },
            state = authReducer( initialState, action );

        // console.log( state );
        expect( state ).toEqual({ 
            id: new Date().getTime(),
            name: "Ana Maria", 
            email: "ana.maria@correo.co",
            logged: true 
        });

    } );

    test( 'debe eliminar datos del usuario al salir y re-establecer state', () => {
        const 
            state = { 
                id: new Date().getTime(),
                name: "Ana Maria", 
                email: "ana.maria@correo.co",
                logged: true 
            },
            action = {
                type: types.logout,
                payload: null
            },
            finalState = authReducer( state, action );

        // console.log( finalState );
        expect( finalState ).toEqual({ 
            logged: false
        });

    } );

} );