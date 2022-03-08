'use strict'

function getNewTime() {
    gameSettingsData.timeLeft--
    return gameSettingsData.timeLeft
}

// let gIntervalId;

// function startTimer() {
//     gIntervalId = setInterval(() => {
//         gameSettingsData.timeLeft--
//         console.log(gameSettingsData.timeLeft)
//     }, 1000)
// }

// function stopTimer() {
//     clearInterval(gIntervalId)
//     // this.countdown = 0
// }

// startTimer()

// get countdownDisplay(): string {
//     if (!this.countdown) this.stopTimer()
//     let minute: string | number = (Math.floor(this.countdown / 60))
//     if (minute < 10) minute = `0${minute}`
//     let second: string | number = (this.countdown % 60)
//     if (second < 10) second = `0${second}`
//     return minute + ':' + second
//   }
