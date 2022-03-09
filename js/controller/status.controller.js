'use strict'

let gIntervalId;

const gElTimeLeft = document.querySelector('.time-left')
const gElMoves = document.querySelector('.moves')
const gElBoardSize = document.querySelector('.board-size')

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
    gElTimeLeft.innerText = 'Time left: ' + getTimeDisplay(timeLeft)
}

// RENDER STATUS //

function renderStatus() {
    const game = getGame()
    renderTime(game.timeLeft)
    gElMoves.innerText = `Moves: ${game.moves} `
    gElBoardSize.innerText = `Size: ${game.boardSize} cards`
}

