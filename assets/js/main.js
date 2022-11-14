const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButto')
const limit = 5;
let offset = 0;

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) =>{
        const newHtml = pokemons.map((pokemon) =>
        `<li class="pokemon ${pokemon.type}">  
        <spam class="number">${pokemon.number}</spam>
        <spam class="name">${pokemon.name}</spam>
        <div class="details">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                
            </ol>
        </div>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
    </li>`
    ).join('')

    pokemonList.innerHTML += newHtml
})
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () =>{
    offset += limit 
    loadPokemonItens(offset, limit)
})


