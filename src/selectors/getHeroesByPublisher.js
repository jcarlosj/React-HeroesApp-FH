import { heroes } from '../data/heroes';

export const getHeroesByPublisher = publisher => {

    const validPublishers = [ 'DC Comics', 'Marvel Comics' ];

    if( ! validPublishers.includes( publisher ) ) {
        throw new Error( `Valid Publishers are "${ validPublishers }", ${ publisher } is not admitted` );
    }

    return heroes.filter( hero => hero.publisher === publisher );       //  Retorna Array de registros coincidentes con el "publisher" solicitado
}