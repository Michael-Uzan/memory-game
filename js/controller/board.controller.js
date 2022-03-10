'use strict'

let gSelectedCardsIdx = [];

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
    if (gSelectedCardsIdx.length === 2) return
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
        } else gSelectedCardsIdx = []

    }
}

function renderBoardTimeout() {
    const game = getGame()
    setTimeout(() => {
        renderBoard()
        gSelectedCardsIdx = []
    }, game.closeCardsTimeout)
}



