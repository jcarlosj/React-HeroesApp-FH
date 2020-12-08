import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';

/** Functions */
import { getHeroById } from '../../selectors/getHeroById';

/** Functional Component */
export const HeroPage = ({ history }) => {

    const 
        { hero_id } = useParams(),    //  Extrae los parametros que van por el URL
        hero = useMemo( () => getHeroById( hero_id ), [ hero_id ] );     //     Memoriza datos, evita obtenerlos cada que renderice el componente si 'hero_id' no cambia

    if( ! hero ) {                    //  Valida si no existen datos del heroe
        return <Redirect to="/" />;   //  Redirecciona al home
    }

    const 
        { 
            superhero,
            publisher,
            alter_ego,
            first_appearance,
            characters
        } = hero;

    const handleReturn = () => {

        // console.log( history );
        if( history.length <= 2 ) {
            if( publisher === 'DC Comics' ) {
                history.push( '/dc' );
                return;
            } 
            else if( publisher === 'Marvel Comics' ) {
                history.push( '/marvel' );
                return;
            }
            
            history.push( '/' );
            return;
        }

        history.goBack();        //  Redirecciona a la pagina anterior
    }

    return (
        <section className="container mt-5 mb-5">
            
            <div className="row">
                <div className="col-12 col-md-4">
                <img 
                    src={ `../assets/images/${ hero_id }.jpg` } 
                    className="img-thumbnail animate__animated animate__fadeInLeft" 
                    alt={ superhero } 
                />
                </div>
                <div className="col-12 col-md-8 animate__animated animate__fadeInDown">
                    <h1>{ superhero }</h1>
                    <hr />
                    <ul className="list-group list-group-flush animate__animated animate__fadeInRight">
                        <li className="list-group-item"><strong>Alter ego: </strong> { alter_ego }</li>
                        <li className="list-group-item"><strong>Publisher: </strong> { publisher }</li>
                        <li className="list-group-item"><strong>First Appearance: </strong> { first_appearance }</li>
                    </ul>
                    <br />
                    
                    <h5>Characters</h5>
                    <hr />
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{ characters }</li>
                    </ul>

                    <button
                        className="btn btn-outline-success"
                        onClick={ handleReturn }
                    >Return</button>

                </div>
            </div>

        </section>
    )
}
