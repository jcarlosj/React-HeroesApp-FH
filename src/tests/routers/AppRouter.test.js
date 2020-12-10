import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';

/** Router */
import { AppRouter } from '../../routers/AppRouter';

/** Context */
import { AuthContext } from '../../auth/AuthContext';

describe( 'AppRouter Router', () => {

    const contextValue = {      
        user: {                 //  State del Reducer
            logged: false
        },                           
        dispatch: jest.fn()     //  Disparador de acciones de nuestro Context
    }

    test( 'debe mostrar el componente de login si no se esta autenticado', () => { 

        /** Esta prueba evalua al componente hijo, para ello se debe usar 'mount' para montar el componente, en el momento esta funcion no es compatible con React 17 */
        const wrapper = mount( 
            <AuthContext.Provider value={       //  Hace disponible las propiedades y funciones del reducer en todo el árbol de componentes de la aplicación
                contextValue    
            }>
                <AppRouter /> 
            </AuthContext.Provider>
        );

        // console.log( wrapper.html() );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'h1' ) ).toBe( 'Login' );

    } );

    test( 'debe mostrar el componente de marvel si esta autenticado', () => { 

        const contextValue = {      
            user: {                 //  State del Reducer
                id: expect.any( Number ),
                name: "Elisa Maria", 
                email: "elisa.maria@correo.co",
                logged: true
            },                           
            dispatch: jest.fn()     //  Disparador de acciones de nuestro Context
        }

        /** Esta prueba evalua al componente hijo, para ello se debe usar 'mount' para montar el componente, en el momento esta funcion no es compatible con React 17 */
        const wrapper = mount( 
            <AuthContext.Provider value={       //  Hace disponible las propiedades y funciones del reducer en todo el árbol de componentes de la aplicación
                contextValue    
            }>
                <AppRouter /> 
            </AuthContext.Provider>
        );

        // console.log( wrapper.debug() );
        expect( wrapper.find( 'h1' ) ).toBe( 'Marvel Comics' );
        expect( wrapper.find( '.card-columns' ).exists() ).toBe( true );

    } );

} );