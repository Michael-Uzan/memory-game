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
    gElTimeLeft.innerHTML = '<img src="./assets/img/timer.png"> ' + getTimeDisplay(timeLeft)
}

// RENDER STATUS //

function renderStatus() {
    const game = getGame()
    renderTime(game.timeLeft)
    gElMoves.innerHTML = `<img src="./assets/img/moves.jpg"> ${game.moves} `
    gElBoardSize.innerHTML = `<img src="./assets/img/size.png"><span>${game.boardSize}</span> `
}

