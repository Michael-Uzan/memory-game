'use strict'

let gElBody = document.querySelector('body')

function onInit() {
    restartGame()
    renderBoard()
    renderStatus()
    renderSettings()
    stopTimer()
    adjustCardsGrid()
    gSelectedCardsIdx = []
}

function toggleModal(title = false, text = false, text2 = false) {
    gElBody.classList.toggle('modal-open')
    const elTitle = document.querySelector('.modal-title');
    const elText = document.querySelector('.modal-text');
    const elText2 = document.querySelector('.modal-text-2');
    if (title) elTitle.innerText = title
    if (text) elText.innerText = text
    if (text2) elText2.innerText = text2
}

function onToggleSettings() {
    gElBody.classList.toggle('settings-open')
}

function onRestartGame() {
    toggleModal()
    onInit()
}



