import React from 'react';
import { useParams } from 'react-router-dom';

/** Functional Component */
export const HeroPage = () => {

    const params = useParams();    //  Extrae los parametros que van por el URL
    console.log( params );

    return (
        <section className="container mt-5 mb-5">
            <h1>Hero Page</h1>
            <p>id: { params.hero_id }</p>
            <hr />
        </section>
    )
}
