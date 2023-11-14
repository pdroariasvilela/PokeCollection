const BASE_URI = 'https://pokeapi.co/api/v2/pokemon/'

export function getPokemon(query){

    return fetch(BASE_URI + query.toLowerCase()).
    then((response) => response.json())
}