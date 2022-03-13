'use strict'

const POKEMON_QUANTITY = 100;

async function getPokemonsBoard() {
    const pokemonsBoard = await _generatePokemonsBoard()
    return pokemonsBoard
}

async function _generatePokemonsBoard() {
    const pokemonsBoard = []
    for (let i = 0; i < POKEMON_QUANTITY; i++) {
        const pokemon = await _buildPokemonData((i + 1))
        const pokemonPair = duplicatePairCard(pokemon)
        pokemonsBoard.push(pokemon, pokemonPair)
    }
    return pokemonsBoard
}

async function _buildPokemonData(matchNumber) {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${matchNumber}/`)
    const pokemon = res.data
    loadImgToCache(pokemon.sprites.other.dream_world.front_default)
    return {
        _id: makeId(),
        matchNumber,
        isShowen: false,
        imgUrl: pokemon.sprites.other.dream_world.front_default,
    }
}
