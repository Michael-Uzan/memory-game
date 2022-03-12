'use strict'
const gElLoading = document.querySelector('.loading-screen')
const gElBody = document.querySelector('body')
const gElConfetti = document.querySelector('.confetti')
const gElModal = document.querySelector('.modal')

ConfettiGenerator({ target: 'confetti' }).render()

async function onInit() {
    toggleLoading()
    await restartGame()
    toggleLoading()
    renderBoard()
    renderStatus()
    renderSettings()
    stopTimer()
    adjustCardsGrid()
    gSelectedCardsIdx = []
    startTrail()
}

function onUnload() {
    console.log('unload')
}

function toggleLoading() {
    gElLoading.classList.toggle('activate')
}

function toggleModal(onClickFunction = '', btnTxt = '', title = '', text = '', text2 = '') {
    gElBody.classList.toggle('modal-open')
    gElModal.innerHTML = `
    <h1 class="modal-title">${title}</h1>
    <h5 class="modal-text">${text}</h5>
    <h5 class="modal-text-2">${text2}</h5>
    <button class="modal-btn" onclick="${onClickFunction}()">${btnTxt}</button>
    `
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







