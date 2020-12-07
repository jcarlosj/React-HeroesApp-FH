import React from 'react';

/** Functions */
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

/** Functional Component */
export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher( publisher );

    return (
        <ul>
            {   heroes.map( hero => (
                    <li
                        key={ hero.id }
                    >{ hero.superhero }</li>
                ))
            }
        </ul>
    )
}
