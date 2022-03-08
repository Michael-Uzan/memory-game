'use strict'

let gSelectedCardsIdx = [];
let gBoardSize = 2;
const gDelayCloseCards = 400;


function onInit() {
    generateBoard(gBoardSize)
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
    gSelectedCardsIdx.push(cardIdx)
    showCard(cardId)
    renderBoard()
    if (gSelectedCardsIdx.length === 2) {
        if (!checkMatch(gSelectedCardsIdx)) {
            closeShowenCards(gSelectedCardsIdx)
            renderBoardTimeout()
        } else if (checkVictory()) {
            toggleModal('Victory!!!')
        }
        gSelectedCardsIdx = []
    }
}

function renderBoardTimeout() {
    setTimeout(() => renderBoard(), gDelayCloseCards)
}

function onRestartGame() {
    toggleModal()
    generateBoard(gBoardSize)
    renderBoard()
}
