import { heroes } from '../data/heroes';

export const getHeroesByName = ( name = '' ) => {

    if( name === '' ) {
        return [];
    }

    name = name.toLocaleLowerCase();

    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes( name ) );       //  Retorna Array de registros coincidentes con el "publisher" solicitado
}