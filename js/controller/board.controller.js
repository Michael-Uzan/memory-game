'use strict'

let gSelectedCardsIdx = [];
const gElBoard = document.querySelector('.board-container')

function renderBoard() {
    const board = getBoard()
    let strHTML = ''
    board.forEach((card, cardIdx) => {
        strHTML += card.isShowen ?
            `<div class="card"><img src=${card.imgUrl}></div>\n` :
            `<div class="card pointer" onclick="onCardClick('${card._id}' , '${cardIdx}')" ></div>\n`
    });
    gElBoard.innerHTML = strHTML;

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

function adjustCardsGrid() {
    let strStyle = ''
    const game = getGame()
    switch (game.boardSize) {
        case 4:
            strStyle = duplicateStr('minmax(60px, 105px) ', 2)
            break;
        case 6:
        case 12:
        case 18:
            strStyle = duplicateStr('minmax(60px, 105px) ', 3)
            break;
        case 10:
        case 14:
        case 26:
        case 30:
            strStyle = duplicateStr('minmax(60px, 105px) ', 5)
            break;
        default:
            strStyle = duplicateStr('minmax(60px, 105px) ', 4)
            break;
    }
    gElBoard.style.gridTemplateColumns = strStyle
}


