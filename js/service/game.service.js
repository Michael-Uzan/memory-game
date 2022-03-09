'use strict'

let game = JSON.parse(JSON.stringify(gameData));

// INIT / RESTART GAME

function restartGame() {
    generateBoard()
    game.isStarted = false
    game.timeLeft = game.totalTime
    game.moves = 0
}

// BOARD //

function generateBoard() {
    game.board = JSON.parse(JSON.stringify(boardData));
    game.board = shuffle(game.board.slice(0, game.boardSize))
}

function getBoard() {
    return game.board
}

function showCard(cardId) {
    const cardIdx = game.board.findIndex(card => card._id === cardId)
    game.board[cardIdx].isShowen = true
}


function closeShowenCards(selectedCardsIdx) {
    selectedCardsIdx.forEach((cardIdx) => {
        game.board[cardIdx].isShowen = false
    })
}

// GAME CONTROLS

function checkMatch(selectedCardsIdx) {
    return game.board[selectedCardsIdx[0]].matchNumber === game.board[selectedCardsIdx[1]].matchNumber
}

function checkVictory() {
    return game.board.every((card) => card.isShowen === true)
}

// TIMER

function getNewTime() {
    game.timeLeft--
    return game.timeLeft
}




