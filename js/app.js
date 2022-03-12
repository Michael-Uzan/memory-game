'use strict'

let gElBody = document.querySelector('body')
let gElConfetti = document.querySelector('.confetti')
ConfettiGenerator({ target: 'confetti' }).render()

function onInit() {
    restartGame()
    renderBoard()
    renderStatus()
    renderSettings()
    stopTimer()
    adjustCardsGrid()
    gSelectedCardsIdx = []
}

function toggleModal(title = '', text = '', text2 = '') {
    gElBody.classList.toggle('modal-open')
    const elTitle = document.querySelector('.modal-title');
    const elText = document.querySelector('.modal-text');
    const elText2 = document.querySelector('.modal-text-2');
    elTitle.innerText = title
    elText.innerText = text
    elText2.innerText = text2
}

function onToggleSettings() {
    gElBody.classList.toggle('settings-open')
}

function onRestartGame() {
    toggleModal()
    toggleConfetti(false)
    onInit()
}

function toggleConfetti(isActivate = true) {
    if (isActivate) gElConfetti.classList.add('active');
    else gElConfetti.classList.remove('active');
}





