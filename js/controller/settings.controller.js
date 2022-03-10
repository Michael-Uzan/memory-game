'use strict'

const gElSettingsBar = document.querySelector('.settings-bar');

function renderSettings() {
    const game = getGame()
    let strHTML = `
    <li>
    <h3>Time</h3>
    <h5>${getTimeDisplay(game.totalTime)}</h5>
    <input type="range" min="10" max="120" value="${game.totalTime}" step="5">
    </li>
    <li>
    <h3>Size</h3>
    <h5>${game.boardSize} Cards</h5>
    <input type="range" min="4" max="20" value="${game.boardSize}" step="2">
    </li>
    <li>
    <h3>Close cards timeout</h3>
    <h5>${game.closeCardsTimeout}</h5>
    <input type="range" min="100" max="900" value="${game.closeCardsTimeout}" step="100">
    </li>
    `
    gElSettingsBar.innerHTML = strHTML
}

