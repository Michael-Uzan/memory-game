'use strict'

let selectedCardsIdx = [];
const delayCloseCards = 700;

function onInit() {
    generateBoard(4)
    renderBoard()
}

function renderBoard() {
    const board = getBoard()
    let strHTML = ''
    board.forEach((card, cardIdx) => {
        strHTML += card.isShowen ?
            `<div class="card"><img src=${card.imgUrl}></div>\n` :
            `<div class="card pointer" onclick="onCardClick('${card._id}' , '${cardIdx}')" ></div>\n`
    });
    document.querySelector('.board-container').innerHTML = strHTML;

}

function onCardClick(cardId, cardIdx) {
    selectedCardsIdx.push(cardIdx)
    showCard(cardId)
    renderBoard()
    if (selectedCardsIdx.length === 2) {
        if (!checkMatch(selectedCardsIdx)) {
            closeShowenCards(selectedCardsIdx)
            renderBoardTimeout()
        } else if (checkVictory()) {
            console.log('Victory!!!')
        }
        selectedCardsIdx = []
    }
}

function renderBoardTimeout() {
    setTimeout(() => renderBoard(), delayCloseCards)
}
