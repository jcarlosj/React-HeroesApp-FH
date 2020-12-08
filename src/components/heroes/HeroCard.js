import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    characters
}) => {

    return (
        <div className="card">
            <img src={ `./assets/images/${ id }.jpg` } className="card-img-top" alt={ superhero } />
            <div className="card-body card-info">
                <h5 className="card-title">{ superhero }</h5>
                <p className="card-text">
                    { alter_ego } 
                    {   ( alter_ego !== characters )
                            && characters
                    }
                </p>
                <small className="card-text">{ publisher }</small>
                
            </div>
            <Link
                to={ `/hero/${ id }` } 
                className="btn btn-outline-success btn-block card-button"
            >Más información</Link>
        </div>
    )
}
