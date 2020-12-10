import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';

/** Router */
import { AppRouter } from '../../routers/AppRouter';

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

        console.log( wrapper.html() );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'h1' ) ).toBe( 'Login' );

    } );

} );