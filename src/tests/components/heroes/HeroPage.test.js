import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';

/** Components */
import { HeroPage } from '../../../components/heroes/HeroPage';

/** Types */


describe( 'HeroPage Component', () => {

    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    };

    test( 'debe mostrar el componente Redirect si no hay argumentos en la URL', () => { 

        /** Esta prueba evalua al componente hijo, para ello se debe usar 'mount' para montar el componente, en el momento esta funcion no es compatible con React 17 */
        const wrapper = mount(
            <MemoryRouter
                initialEntries={ [ '/hero' ] }      //  URL: Argumento es la ruta que necesita para renderizarse
            >
                <HeroPage history={ historyMock } />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'Redirect' ).exists() ).toBe( true );     //  Verifica que el componente Redirect exista

    } );

    test( 'debe mostrar el hero si el parametro existe y se encuentra', () => { 

        /** Esta prueba evalua al componente hijo, para ello se debe usar 'mount' para montar el componente, en el momento esta funcion no es compatible con React 17 */
        const wrapper = mount(
            <MemoryRouter
                initialEntries={ [ '/hero/dc-superman' ] }      //  URL: Argumento es la ruta que necesita para renderizarse
            >
                <Route path="/hero/:hero_id" component={ HeroPage } />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'h1' ).text().trim() ).toBe( 'Superman' );
        expect( wrapper.find( 'img' ).prop( 'alt' ).text().trim() ).toBe( 'Superman' );

    });

    test( 'debe invocar handleReturn regresando a la pagina anterior usando push', () => { 

        const 
            historyMock = {
                length: 1,
                push: jest.fn(),
                goBack: jest.fn()
            },
                    /** Esta prueba evalua al componente hijo, para ello se debe usar 'mount' para montar el componente, en el momento esta funcion no es compatible con React 17 */
            wrapper = mount(
                <MemoryRouter
                    initialEntries={ [ '/hero/dc-superman' ] }      //  URL: Argumento es la ruta que necesita para renderizarse
                >
                    <Route 
                        path="/hero/:hero_id" 
                        component={ () => <HeroPage history={ historyMock } /> }        //  Paso el history al componente
                    />
                </MemoryRouter>
            );

        wrapper.find( 'button' ).prop( 'onClick' ) ();      //  Hace click sobre el botón Return

        expect( historyMock.push ).toHaveBeenCalled();
        expect( historyMock.goBack ).not.toHaveBeenCalled();

    } );

} );