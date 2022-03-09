'use strict'

let gElBody = document.querySelector('body')

function onInit() {
    restartGame()
    renderBoard()
    renderStatus()
}

function toggleModal(title = false) {
    gElBody.classList.toggle('modal-open')
    const elTitle = document.querySelector('.modal-title');
    if (title) elTitle.innerText = title
}

function onToggleSettings() {
    gElBody.classList.toggle('settings-open')
}


