import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

/** Context */
import { AuthContext } from '../../auth/AuthContext';

/** Router */
import { DashboardRouter } from '../../routers/DashboardRouter';

describe( 'Dashboard Router', () => {

    const contextValue = {      
        user: {                 //  State del Reducer
            id: expect.any( Number ),
            name: "Luisa Maria", 
            email: "luisa.maria@correo.co",
            logged: true
        },                           
        dispatch: jest.fn()     //  Disparador de acciones de nuestro Context
    }

    test( 'debe mostrarse correctamente', () => { 
    
        /** Esta prueba evalua al componente hijo, para ello se debe usar 'mount' para montar el componente, en el momento esta funcion no es compatible con React 17 */
        const wrapper = mount( 
            <AuthContext.Provider value={       //  Hace disponible las propiedades y funciones del reducer en todo el árbol de componentes de la aplicación
                contextValue    
            }>
                <MemoryRouter>
                    <DashboardRouter /> 
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        // console.log( wrapper.debug() );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'span.text-white' ).text().trim() ).toBe( 'Hola, Luisa Maria' );

    } );

} );