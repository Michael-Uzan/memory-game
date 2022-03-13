'use strict'

let game = JSON.parse(JSON.stringify(gameData));

// INIT / RESTART GAME //

async function restartGame() {
    await generateBoard(game.boardType)
    game.isStarted = false
    game.timeLeft = game.totalTime
    game.moves = 0
}

// BOARD //

async function generateBoard(boardType) {
    if (boardType === 'robot') game.board = await getRobotsBoard();
    if (boardType === 'pokemon') game.board = await getPokemonsBoard();
    if (boardType === 'people') game.board = await getPeoplesBoard();
    const randomIdx = getRandomEvenInt(2, 90)
    game.board = shuffle(game.board.slice(randomIdx, randomIdx + game.boardSize))
}

// GETTERS //

function getBoard() {
    return game.board
}

function getGame() {
    return game
}

// POST / EDIT GAME //

function showCard(cardId) {
    const cardIdx = game.board.findIndex(card => card._id === cardId)
    game.board[cardIdx].isShowen = true
}


function closeShowenCards(selectedCardsIdx) {
    selectedCardsIdx.forEach((cardIdx) => {
        game.board[cardIdx].isShowen = false
    })
}

function editGame(field, value) {
    game[field] = value
}

// GAME CONTROLS //

function checkMatch(selectedCardsIdx) {
    return game.board[selectedCardsIdx[0]].matchNumber === game.board[selectedCardsIdx[1]].matchNumber
}

function checkVictory() {
    return game.board.every((card) => card.isShowen === true)
}

// GAME STATUS //

function getNewTime() {
    game.timeLeft--
    return game.timeLeft
}

function addMove() {
    game.moves++
}




