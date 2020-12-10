import '@testing-library/jest-dom';

/** Reducer */
import { authReducer } from '../../auth/authReducer';

/** Types */
import { types } from '../../types/types';

describe( 'todoReducer Reducer', () => {

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
            initialState = { 
                logged: false
            },
            action = {
                type: types.logged,
                payload: null
            },
            state = authReducer( initialState, action );

        // console.log( state );
        expect( state ).toEqual( initialState );

    } );

} );