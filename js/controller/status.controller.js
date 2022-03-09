'use strict'

let gIntervalId;

const elTimeLeft = document.querySelector('.time-left')
const elMoves = document.querySelector('.moves')
const elBoardSize = document.querySelector('.board-size')

// TIMER //

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
}


function renderTime(timeLeft) {
    // if (!this.countdown) this.stopTimer()
    let minute = (Math.floor(timeLeft / 60))
    if (minute < 10) minute = `0${minute}`
    let second = (timeLeft % 60)
    if (second < 10) second = `0${second}`
    let timeToDisplay = 'Time left: ' + minute + ':' + second
    elTimeLeft.innerText = timeToDisplay
}

// STATUS //

function renderStatus() {
    const game = getGame()
    renderTime(game.timeLeft)
    elMoves.innerText = `Moves: ${game.moves} `
    elBoardSize.innerText = `Size: ${game.boardSize} cards`
}

