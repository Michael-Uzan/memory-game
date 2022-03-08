'use strict'

let board = boardData;

function generateBoard(size) {
    board = shuffle(board.slice(0, size))
}

function getBoard() {
    return board
}

function showCard(cardId) {
    const cardIdx = board.findIndex(card => card._id === cardId)
    board[cardIdx].isShowen = true
}