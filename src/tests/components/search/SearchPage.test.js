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

    test( 'debe mostrar mensaje de error, valor en el input con el valor del queryString en la URL', () => { 

        /** Esta prueba evalua al componente hijo, para ello se debe usar 'mount' para montar el componente, en el momento esta funcion no es compatible con React 17 */
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search?q=supergirl' ]}>
                <Route
                    path="/search"
                    component={ SearchPage }
                />
            </MemoryRouter>
        );

        expect( wrapper.find( 'input' ).prop( 'value' ) ).toBe( 'supergirl' );
        expect( wrapper.find( 'p.alert-danger' ).text().trim() ).toBe( 'There is no known hero named supergirl' );
        expect( wrapper ).toMatchSnapshot();

    } );

    test( 'debe invocar redireccion usando history.push( queryString )', () => { 

        const 
            historyMock = {
                push: jest.fn()
            },
            wrapper = mount(
                <MemoryRouter initialEntries={[ '/search?q=batman' ]}>
                    <Route
                        path="/search"
                        component={ () => <SearchPage history={ historyMock } /> }
                    />
                </MemoryRouter>
            );

            wrapper.find( 'input' ).simulate( 'change', {       //  Simula cambio de valor en la caja de texto
                target: {
                    name: 'term',    //  Nombre del input
                    value: 'wonder woman'
                }
            } );

            wrapper.find( 'form' ).prop( 'onSubmit' ) ({        //  Simula invocacion del submit del formulario
                preventDefault(){}                              //  Simula event recibido por la funcion invocada
            });

            expect( historyMock.push ).toHaveBeenCalledWith( `?q=wonder woman` );

    } );

} );