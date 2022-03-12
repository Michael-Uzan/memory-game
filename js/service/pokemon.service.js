'use strict'
const POKEMON_QUANTITY = 15;

async function getPokemonsBoard() {
    const pokemonsBoard = await _generatePokemonsBoard()
    return pokemonsBoard
}

async function _generatePokemonsBoard() {
    const pokemonsBoard = []
    const randomNum = getRandomInt(0, 300)
    for (let i = randomNum; i < (POKEMON_QUANTITY + randomNum); i++) {
        const pokemon = await _buildPokemonData((i + 1))
        const pokemonPair = { ...pokemon, _id: makeId() }
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
