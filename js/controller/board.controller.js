'use strict'

function onInit() {
    console.log('init')
    generateBoard(4)
    renderBoard()
}

function renderBoard() {
    const board = getBoard()
    let strHTML = ''
    board.forEach((card) => {
        strHTML += card.isShowen ?
            `<div class="card"><img src=${card.imgUrl}></div>\n` :
            `<div class="card" onclick="onCardClick('${card._id}')" ></div>\n`
    });
    document.querySelector('.board-container').innerHTML = strHTML;

}

function onCardClick(cardId) {
    console.log('hello', cardId)
    showCard(cardId)
    renderBoard()
}