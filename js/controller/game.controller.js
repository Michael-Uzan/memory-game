'use strict'

let gIntervalId;

const elTimeLeft = document.querySelector('.time-left')
const elMoves = document.querySelector('.moves')
const elBoardSize = document.querySelector('.board-size')

function startTimer() {
    gIntervalId = setInterval(() => {
        const timeLeft = getNewTime()
        renderTime(timeLeft)
        if (timeLeft === 0) {
            toggleModal('You lost')
            stopTimer()
        }
    }, 1000)
}

function stopTimer() {
    clearInterval(gIntervalId)
    // this.countdown = 0
}


function renderTime(timeLeft) {
    // if (!this.countdown) this.stopTimer()
    let minute = (Math.floor(timeLeft / 60))
    if (minute < 10) minute = `0${minute}`
    let second = (timeLeft % 60)
    if (second < 10) second = `0${second}`
    let timeToDisplay = 'Time left: ' + minute + ':' + second
    elTimeLeft.innerText = timeToDisplay
    // return minute + ':' + second
}


elMoves.innerText = `Moves: ${gameSettingsData.moves} `
elBoardSize.innerText = `Size: ${gameSettingsData.boardSize} cards`