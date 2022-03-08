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

function checkMatch(selectedCardsId) {
    const cardIdx1 = board.findIndex(card => card._id === selectedCardsId[0])
    const cardIdx2 = board.findIndex(card => card._id === selectedCardsId[1])
    if (board[cardIdx1].matchNumber !== board[cardIdx2].matchNumber) {
        board[cardIdx1].isShowen = false
        board[cardIdx2].isShowen = false
    }
}