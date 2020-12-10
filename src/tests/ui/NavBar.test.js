import '@testing-library/jest-dom';
import { MemoryRouter, Router } from 'react-router-dom';
import { mount } from 'enzyme';

/** Context */
import { AuthContext } from '../../auth/AuthContext';

/** Components */
import { NavBar } from '../../components/ui/NavBar';

/** Types */
import { types } from '../../types/types';

describe( 'NavBar UI', () => {

    const 
        contextValue = {      
            user: {                 //  State del Reducer
                id: expect.any( Number ),
                name: "Eva Sofia", 
                email: "eva.sofia@correo.co",
                logged: true
            },                           
            dispatch: jest.fn()     //  Disparador de acciones de nuestro Context
        },
        historyMock = {
            push: jest.fn(),
            location: {},
            listen: jest.fn(),
            createHref: jest.fn(),
            replace: jest.fn()
        },
        wrapper = mount( 
            <AuthContext.Provider value={       //  Hace disponible las propiedades y funciones del reducer en todo el árbol de componentes de la aplicación
                contextValue    
            }>
                <MemoryRouter>
                    <Router history={ historyMock }>
                        <NavBar /> 
                    </Router>
                </MemoryRouter>
            </AuthContext.Provider>
        );

    afterEach( () => {
        jest.clearAllMocks();
    });

    test( 'debe mostrarse correctamente', () => { 

        /** Esta prueba evalua al componente hijo, para ello se debe usar 'mount' para montar el componente, en el momento esta funcion no es compatible con React 17 */
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'span.text-white' ).text().trim() ).toBe( 'Hola, Eva Sofia' );

    } );

    test( 'debe invocar handleLogout al pulsar el boton logout y usar history para redireccionar', () => { 

        wrapper.find( 'button' ).prop( 'onClick' )();   //  Hace click en el boton logout

        expect( contextValue.dispatch ).toHaveBeenCalledWith( {
            type: types.logout,
            payload: null
        } );
        expect( historyMock.replace ).toHaveBeenCalledWith( '/login' );

    } );

} );