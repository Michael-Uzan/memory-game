'use strict'

function onInit() {
    restartGame()
    renderBoard()
}

function toggleModal(title = false) {
    let elBody = document.querySelector('body')
    elBody.classList.toggle('modal-open')
    const elTitle = document.querySelector('.modal-title');
    if (title) elTitle.innerText = title
}


