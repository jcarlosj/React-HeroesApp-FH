import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

/** Route: Component */
import { PrivateRoute } from '../../routers/PrivateRoute';

describe( 'PrivateRoute Component', () => {

    const props = {     //  Para simular rest
        location: {
            pathname: '/cualquiera',
            search: ''
        }
    }

    Storage.prototype.setItem = jest.fn();

    test( 'debe desplegar el componente al verificar autenticacion de usuario y verificar que se ejecuto el localStorage que guarda la ultima ruta navegada', () => { 
        
        /** Esta prueba evalua al componente hijo, para ello se debe usar 'mount' para montar el componente, en el momento esta funcion no es compatible con React 17 */
        const wrapper = shallow(
            /** <MemoryRouter> mantiene el historial de su “URL” en la memoria 
             *  (no lee ni escribe en la barra de direcciones). Útil en pruebas 
             * y entornos que no son de navegador como React Native */
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ true }
                    component={ () => <span>Puede ser cualquier componente</span> }
                    { ...props }
                />
            </MemoryRouter>
        );

        console.log( wrapper.html() );
        // expect( wrapper.find( 'span' ).exists() ).toBe( true );      //  En el momento de definir esta prueba la version de Enzyme no es compatible para usar mount en React 17
        expect( localStorage.setItem ).toHaveBeenCalledWith( 
            'last_route', 
            JSON.stringify({
                pathname: '/cualquiera',
                search: ''
            })
        );

    } );

} );