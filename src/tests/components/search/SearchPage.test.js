import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';

/** Components */
import { SearchPage } from '../../../components/search/SearchPage';


describe( 'SearchPage Component', () => {

    test( 'debe mostrarse correctamente con sus valores por defecto', () => { 

        /** Esta prueba evalua al componente hijo, para ello se debe usar 'mount' para montar el componente, en el momento esta funcion no es compatible con React 17 */
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search' ]}>
                <Route
                    path="/search"
                    component={ SearchPage }
                />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'p.alert-info' ).text().trim() ).toBe( 'Search a hero...' );

    } );

    test( 'debe mostrar a Batman e input con el valor del queryString en la URL', () => { 

        /** Esta prueba evalua al componente hijo, para ello se debe usar 'mount' para montar el componente, en el momento esta funcion no es compatible con React 17 */
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search?q=batman' ]}>
                <Route
                    path="/search"
                    component={ SearchPage }
                />
            </MemoryRouter>
        );

        expect( wrapper.find( 'input' ).prop( 'value' ) ).toBe( 'batman' );
        expect( wrapper ).toMatchSnapshot();

    } );

} );