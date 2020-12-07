import { heroes } from '../data/heroes';

export const getHeroById = id => {

    return heroes.find( hero => hero.id === id );       //  Retorna Array de registros coincidentes con el "publisher" solicitado
}