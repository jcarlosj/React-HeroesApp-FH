import React from 'react';

/** Hooks */
import { useForm } from '../../hooks/useForm';

/** Functional Component */
export const SearchPage = ({ history }) => {

    const 
        [ formValues, handleInputChange, reset ] = useForm({
            term: ''
        }),
        { term } = formValues;

    const handleSubmit = event => {
        event.preventDefault();
        
        if( term.trim().length <= 1 ) {
            return;
        }

        console.log( formValues.term );

        // reset();

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

        </section>
    )
}
