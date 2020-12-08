import React, { useMemo } from 'react';

/** Functions */
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

import './heroes.css';

/** Functional Component */
export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ] );            //     Memoriza datos, evita obtenerlos cada que renderice el componente si 'publisher' no cambia

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
