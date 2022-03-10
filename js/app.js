'use strict'

let gElBody = document.querySelector('body')

function onInit() {
    restartGame()
    renderBoard()
    renderStatus()
    renderSettings()
    stopTimer()
}

function toggleModal(title = false) {
    gElBody.classList.toggle('modal-open')
    const elTitle = document.querySelector('.modal-title');
    if (title) elTitle.innerText = title
}

function onToggleSettings() {
    gElBody.classList.toggle('settings-open')
}

function onRestartGame() {
    toggleModal()
    onInit()
}



