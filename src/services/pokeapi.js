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

const getColor = (type) => {

    switch (type) {
        case "normal":
            return "#a8a878";

        case "fire":
            return "#f08030";

        case "water":
            return "#6890f0";

        case "grass":
            return "#78c850";

        case "electric":
            return "#f8d030";

        case "ice":
            return "#98d8d8";

        case "fighting":
            return "#c03028";

        case "poison":
            return "#a040a0";

        case "ground":
            return "#e0c068";

        case "flying":
            return "#a890f0";

        case "psychic":
            return "#f85888";

        case "bug":
            return "#a8b820";

        case "rock":
            return "#b8a038";

        case "ghost":
            return "#705898";

        case "dark":
            return "#705848";

        case "dragon":
            return "#7038f8";

        case "steel":
            return "#b8b8d0";

        case "fairy":
            return "#f0b6bc";

    }
}

export {
    getPageOfPokemons,
    getPokemon,
    getColor
}