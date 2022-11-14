const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dress_world.front_default
    
    return pokemon

}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
}

    pokeApi.getPokemons = (offiset = 0, limit = 10) =>
    {
        const url = `https://pokeapi.co/api/v2/pokemon/?offiset=${ofiset}&limit=${limit}`
        return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => (jsonBody.results))
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) 
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonsDetails)
    }
    
    Promise.all([
        fetch('https://pokeapi.co/api/v2/pokemon/1'),
        fetch('https://pokeapi.co/api/v2/pokemon/2'),
        fetch('https://pokeapi.co/api/v2/pokemon/3'),
        fetch('https://pokeapi.co/api/v2/pokemon/4')
    ]).then(results == [
        console.log(results)
    ])