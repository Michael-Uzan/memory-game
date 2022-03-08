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

function checkMatch(selectedCardsIdx) {
    return board[selectedCardsIdx[0]].matchNumber === board[selectedCardsIdx[1]].matchNumber
}

function closeShowenCards(selectedCardsIdx) {
    selectedCardsIdx.forEach((cardIdx) => {
        board[cardIdx].isShowen = false
    })
}

function checkVictory() {
    return board.every((card) => card.isShowen === true)
}

