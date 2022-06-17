const getPageOfPokemons = async (page) => {
    let numberOfPokemons = 20
    return await fetch('https://pokeapi.co/api/v2/pokemon?limit=' + numberOfPokemons + '&offset=' + page * numberOfPokemons)
        .then((response) => {
            return response.json();
        })
}

const getPokemon = async (pokemon) => {
    return await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
        .then((response) => {
            return response.json();
        })
}

export {
    getPageOfPokemons,
    getPokemon
}