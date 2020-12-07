import React from 'react';

/** Components */
import { HeroList } from '../heroes/HeroList';

/** Functional Component */
export const DcPage = () => {
    return (
        <section className="container mt-5 mb-5">
            <h1>DC Comics</h1>
            <hr />

            <HeroList publisher={ 'DC Comics' } />

        </section>
    )
}
