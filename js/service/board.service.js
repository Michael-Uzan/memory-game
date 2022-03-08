'use strict'

let board = boardData;

function generateBoard(size) {
    board = shuffle(board.slice(0, size))
}

function getBoard() {
    return board
}
