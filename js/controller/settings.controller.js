'use strict'

const gElSettingsBar = document.querySelector('.settings-bar');

function renderSettings() {
    const game = getGame()
    let strHTML = `
    <li>
    <h3>Time</h3>
    <h5>${getTimeDisplay(game.totalTime)}</h5>
    <input class="pointer" onchange="onChangeGameSettings(this)" name="totalTime" type="range" min="10" max="120" value="${game.totalTime}" step="5">
    </li>
    <li>
    <h3>Size</h3>
    <h5>${game.boardSize} Cards</h5>
    <input class="pointer" onchange="onChangeGameSettings(this)" name="boardSize" type="range" min="4" max="30" value="${game.boardSize}" step="2">
    </li>
    <li>
    <h3>Close cards timeout</h3>
    <h5>${getCloseTimeoutDisplay(game.closeCardsTimeout)}</h5>
    <input class="pointer" onchange="onChangeGameSettings(this)" name="closeCardsTimeout" type="range" min="100" max="900" value="${game.closeCardsTimeout}" step="100">
    </li>
    <li>
    <h3>Board Type</h3>
    <div class="board-type pointer" onclick="onSelectBoardType('pokemon')"><img src="./assets/img/pokemon.jpg"></div>
    <div class="board-type pointer" onclick="onSelectBoardType('robot')"><img src="./assets/img/robot.png"></div>
    <div class="board-type pointer" onclick="onSelectBoardType('people')"><img src="./assets/img/people.png"></div>
    </li>
    `
    gElSettingsBar.innerHTML = strHTML
}

function onChangeGameSettings(ev) {
    editGame(ev.name, +ev.value)
    adjustCardsGrid()
    renderSettings()
    onInit()
}

function onSelectBoardType(boardType) {
    editGame('boardType', boardType)
    onInit()
}


