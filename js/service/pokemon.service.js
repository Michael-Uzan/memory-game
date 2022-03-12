'use strict'
const POKEMON_QUANTITY = 15;
const POKEMON_DB = 'pokemonDB';

getPokemonsBoard()

async function getPokemonsBoard() {
    const pokemonsBoard = await loadFromStorage(POKEMON_DB) || _generatePokemonsBoard()
    return pokemonsBoard
}

async function _generatePokemonsBoard() {
    const pokemonsBoard = []
    for (let i = 0; i < POKEMON_QUANTITY; i++) {
        const pokemon = await _buildPokemonData((i + 1))
        const pokemonPair = { ...pokemon, _id: makeId() }
        pokemonsBoard.push(pokemon, pokemonPair)
    }
    saveToStorage(POKEMON_DB, pokemonsBoard)
    return pokemonsBoard
}

async function _buildPokemonData(matchNumber) {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${matchNumber}/`)
    const pokemon = res.data
    // console.log('res.data', res.data)
    return {
        _id: makeId(),
        matchNumber,
        name: pokemon.name,
        isShowen: false,
        imgUrl: pokemon.sprites.other.dream_world.front_default,
    }
}