'use strict'

let gSelectedCardsIdx = [];
const gDelayCloseCards = 400;


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
    if (!game.isStarted) {
        startTimer()
        game.isStarted = true
    }
    gSelectedCardsIdx.push(cardIdx)
    showCard(cardId)
    renderBoard()
    if (gSelectedCardsIdx.length === 2) {
        addMove()
        renderStatus()
        if (!checkMatch(gSelectedCardsIdx)) {
            closeShowenCards(gSelectedCardsIdx)
            renderBoardTimeout()
        } else if (checkVictory()) {
            toggleModal('Victory!!!')
            stopTimer()
        }
        gSelectedCardsIdx = []
    }
}

function renderBoardTimeout() {
    setTimeout(() => renderBoard(), gDelayCloseCards)
}

function onRestartGame() {
    toggleModal()
    restartGame()
    renderBoard()
    renderStatus()
}
