import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

/** Dependencies */
import queryString from 'query-string';

/** Functions */
import { getHeroesByName } from '../../selectors/getHeroesByName';

/** Hooks */
import { useForm } from '../../hooks/useForm';

/** Components */
import { HeroCard } from '../heroes/HeroCard';

/** Functional Component */
export const SearchPage = ({ history }) => {

    const 
        location =  useLocation(),                                  //  Obtiene location usando el Hook useLocation de React.
        { q = '' } = useMemo( () => queryString.parse( location.search ), [ location.search ] ),     //     Procesa queryString para la URL y obtiene la variable con termino(s) de búsqueda & Memoriza datos, evita obtenerlos cada que renderice el componente si 'location.search' no cambia
        [ formValues, handleInputChange ] = useForm({
            term: q                                                 //  Actualiza queryString del State del Formulario.
        }),
        { term } = formValues,
        heroesFiltered = useMemo( () => getHeroesByName( q ), [ q ] );                   //  Memoriza resultados obtenidos de la búsqueda, evita obtenerlos cada que renderice el componente si 'q' no cambia. 

    console.log( q, location );     //  Procesa queryString para la URL

    const handleSubmit = event => {
        event.preventDefault();
        
        if( term.trim().length <= 1 ) {
            return;
        }

        console.log( formValues.term );
        history.push( `?q=${ term }` );         //  Agrega el termino a variable en queryString en el historial de navegacion, 'term' cambia siempre que se escribe sobre el campo.

    }

    return (
        <section>

            <div className="jumbotron animate__animated animate__bounceInDown">

                <h1 className="display-4">Search</h1>
                <form
                    onSubmit={ handleSubmit }
                >
                    <div className="form-group">
                        <input  
                            name="term"
                            type="text"
                            className="form-control"
                            placeholder="Ej: Superman."
                            autoComplete="off"
                            value={ term }
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div className="form-group">
                        <button
                            className="btn btn-primary"
                        >Search now</button>
                    </div>
        
                </form>
                
            </div>    
            <section className="container">
                {   /** TO DO: Crear loading que controle visualizacion del alert de busqueda */
                    ( q === '' ) 
                        && <p className="alert alert-info">Search a hero...</p>
                }
                {   ( q !== '' && heroesFiltered.length === 0 ) 
                        && <p className="alert alert-danger">There is no known hero named <strong>{ q }</strong></p>
                }
                <div className="card-columns animate__animated animate__fadeIn">
                    {   heroesFiltered.map( hero => (
                            <HeroCard
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }
                </div>
            </section>

        </section>
    )
}
