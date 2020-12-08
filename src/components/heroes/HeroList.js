import React from 'react';

/** Functions */
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

import './heroes.css';

/** Functional Component */
export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher( publisher );

    return (
        <div className="card-columns">
            {   heroes.map( hero => (
                    <HeroCard
                        key={ hero.id }
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}
