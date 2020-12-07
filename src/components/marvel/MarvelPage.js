import React from 'react';

/** Components */
import { HeroList } from '../heroes/HeroList';

/** Functional Component */
export const MarvelPage = () => {
    return (
        <section className="container mt-5 mb-5">
            <h1>Marvel Comics</h1>
            <hr />

            <HeroList publisher={ 'Marvel Comics' } />

        </section>
    )
}
