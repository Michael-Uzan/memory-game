'use strict'

let selectedCardsId = [];
const delayCloseCards = 700;

function onInit() {
    generateBoard(4)
    renderBoard()
}

function renderBoard() {
    const board = getBoard()
    let strHTML = ''
    board.forEach((card) => {
        strHTML += card.isShowen ?
            `<div class="card"><img src=${card.imgUrl}></div>\n` :
            `<div class="card pointer" onclick="onCardClick('${card._id}')" ></div>\n`
    });
    document.querySelector('.board-container').innerHTML = strHTML;

}

function onCardClick(cardId) {
    selectedCardsId.push(cardId)
    showCard(cardId)
    renderBoard()
    if (selectedCardsId.length === 2) {
        checkMatch(selectedCardsId)
        selectedCardsId = []
        renderBoardTimeout()
    }
}

function renderBoardTimeout() {
    setTimeout(() => renderBoard(), delayCloseCards)
}
