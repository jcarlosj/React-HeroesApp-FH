import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

/** Components */
import { HeroPage } from '../../../components/heroes/HeroPage';

/** Types */


describe( 'HeroPage Component', () => {

    const 
        historyMock = {
            length: 10,
            push: jest.fn(),
            goBack: jest.fn()
        },
        wrapper = mount(
            <MemoryRouter
                initialEntries={ [ '/hero' ] }      //  URL: Argumento es la ruta que necesita para renderizarse
            >
                <HeroPage history={ historyMock } />
            </MemoryRouter>
        );

    test( 'debe mostrar el componente Redirect si no hay argumentos en la URL', () => { 

        /** Esta prueba evalua al componente hijo, para ello se debe usar 'mount' para montar el componente, en el momento esta funcion no es compatible con React 17 */

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'Redirect' ).exists() ).toBe( true );     //  Verifica que el componente Redirect exista

    } );

} );