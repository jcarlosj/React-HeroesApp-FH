import '@testing-library/jest-dom';

/** Reducer */
import { authReducer } from '../../auth/authReducer';

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

} );