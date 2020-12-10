import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

/** Context */
import { AuthContext } from '../../auth/AuthContext';

/** Components */
import { NavBar } from '../../components/ui/NavBar';

describe( 'Dashboard Router', () => {

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
        wrapper = mount( 
            <AuthContext.Provider value={       //  Hace disponible las propiedades y funciones del reducer en todo el árbol de componentes de la aplicación
                contextValue    
            }>
                <MemoryRouter>
                    <NavBar /> 
                </MemoryRouter>
            </AuthContext.Provider>
        );

    test( 'debe mostrarse correctamente', () => { 

        /** Esta prueba evalua al componente hijo, para ello se debe usar 'mount' para montar el componente, en el momento esta funcion no es compatible con React 17 */
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'span.text-white' ).text().trim() ).toBe( 'Hola, Eva Sofia' );

    } );

} );