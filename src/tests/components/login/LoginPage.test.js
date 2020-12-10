import '@testing-library/jest-dom';
import { mount } from 'enzyme';

/** Context */
import { AuthContext } from '../../../auth/AuthContext';

/** Components */
import { LoginPage } from '../../../components/login/LoginPage';

/** Types */
import { types } from '../../../types/types';

describe( 'LoginPage Component', () => {

    const 
        contextValue = {      
            user: {                 //  State del Reducer
                logged: false
            },                           
            dispatch: jest.fn()     //  Disparador de acciones de nuestro Context
        },
        historyMock = {
            replace: jest.fn()
        },
        wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <LoginPage history={ historyMock } />
            </AuthContext.Provider>
        );

    test( 'debe mostrarse correctamente', () => { 

        /** Esta prueba evalua al componente hijo, para ello se debe usar 'mount' para montar el componente, en el momento esta funcion no es compatible con React 17 */
        // console.log( wrapper.html() );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'h1' ).text().trim() ).toBe( 'Login' );
        expect( wrapper.find( 'button' ).text().trim() ).toBe( 'Login' );

    } );

    test( 'debe invocar el dispatch y la navegacion al hacer click en el boton de login', () => {
       
        wrapper.find( 'button' ).simulate( 'click' );           //  Hace click sobre el boton de login

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: { 
                id: expect.any( Number ),
                name: "Eva Sofia", 
                email: "eva.sofia@correo.co" 
            }
        });
        expect( historyMock.replace ).toHaveBeenCalledWith( '/' );

        localStorage.setItem( 'last_route', { pathname: '/dc', search: '' } );

        wrapper.find( 'button' ).simulate( 'click' );           //  Hace click sobre el boton de login
        expect( historyMock.replace ).toHaveBeenCalledWith( '/dc' );

    });

} );