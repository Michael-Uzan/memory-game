'use strict'

function makeId(length = 17) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function shuffle(items) {
    var randIdx, keep, i;
    for (i = items.length - 1; i > 0; i--) {
        randIdx = getRandomInt(0, items.length);

        keep = items[i];
        items[i] = items[randIdx];
        items[randIdx] = keep;
    }
    return items;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //including minimum
}

function getTimeDisplay(timeSec) {
    let minute = (Math.floor(timeSec / 60))
    if (minute < 10) minute = `0${minute}`
    let second = (timeSec % 60)
    if (second < 10) second = `0${second}`
    return (minute + ':' + second)
}

function getCloseTimeoutDisplay(timeout) {
    if (timeout < 200) return 'Super fast'
    if (timeout < 300) return 'Very fast'
    if (timeout < 400) return 'Fast'
    if (timeout < 500) return 'Normal'
    if (timeout < 600) return 'Notmal-Slow'
    if (timeout < 700) return 'A bit slow'
    if (timeout < 800) return 'Slow'
    if (timeout < 900) return 'Very slow'
    return 'Super slow'
}

function duplicateStr(str, duplicateCount) {
    let duplicatedStr = ''
    for (let i = 0; i < duplicateCount; i++) {
        duplicatedStr += str
    }
    return duplicatedStr
}

// function makeLorem(size = 100) {
//     var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
//     var txt = '';
//     while (size > 0) {
//         size--;
//         txt += words[Math.floor(Math.random() * words.length)] + ' ';
//     }
//     return txt;
// }

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
// }

// function createEmptyMat(ROWS, COLS) {
//     var mat = []
//     for (var i = 0; i < ROWS; i++) {
//         var row = []
//         for (var j = 0; j < COLS; j++) {
//             row.push('')
//         }
//         mat.push(row)
//     }
//     return mat
// }

// // print Mat Into Selector with Class of evey cell
// function printMat(mat, selector) {
//     var strHTML = '<table border="0"><tbody>';
//     for (var i = 0; i < mat.length; i++) {
//         strHTML += '<tr>';
//         for (var j = 0; j < mat[0].length; j++) {
//             var cell = mat[i][j];
//             var className = 'cell cell' + i + '-' + j;
//             strHTML += '<td class="' + className + '"> ' + cell + ' </td>'
//         }
//         strHTML += '</tr>'
//     }
//     strHTML += '</tbody></table>';
//     var elContainer = document.querySelector(selector);
//     elContainer.innerHTML = strHTML;
// }

// // location such as: {i: 2, j: 7}
// function renderCell(location, value) {
//     // Select the elCell and set the value
//     var elCell = document.querySelector(`.cell${location.i}-${location.j}`);
//     elCell.innerHTML = value;
// }


// function getImgHTML(imgName, imgClass = '') {
//     return `<img src="img/${imgName}" class="${imgClass}" />`
// }


// function CountCellMined() {
//     var CountCellMined = 0;
//     for (var i = 0; i < gBoard.length; i++) {
//         for (var j = 0; j < gBoard[0].length; j++) {
//             if (gBoard[i][j].isMine === true) CountCellMined++
//         }
//     }
//     return CountCellMined;
// }

// function findEmptyCell() {
//     var emptyCellArray = [];
//     for (var i = 0; i < gBoard.length; i++) {
//         for (var j = 0; j < gBoard[0].length; j++) {
//             if (gBoard[i][j] === EMPTY) emptyCellArray.push({ i: i, j: j })
//         }
//     }
//     if (!emptyCellArray.length) return;
//     shuffle(emptyCellArray);
//     return drawNum(emptyCellArray);
// }

// function countNeighbors(cellI, cellJ, mat) {
//     var neighborsCount = 0;
//     for (var i = cellI - 1; i <= cellI + 1; i++) {
//         if (i < 0 || i >= mat.length) continue;
//         for (var j = cellJ - 1; j <= cellJ + 1; j++) {
//             if (j < 0 || j >= mat[i].length) continue;
//             if (i === cellI && j === cellJ) continue;
//             console.log('mat[i][j]', mat[i][j]); // here are all the negs
//             neighborsCount++;
//         }
//     }
//     return neighborsCount;
// }

// function handleKeyMoveGamer(event) {

//     var i = gGamerPos.i;
//     var j = gGamerPos.j;

//     switch (event.key) {
//         case 'ArrowLeft':
//             moveTo(i, j - 1);
//             break;
//         case 'ArrowRight':
//             moveTo(i, j + 1);
//             break;
//         case 'ArrowUp':
//             moveTo(i - 1, j);
//             break;
//         case 'ArrowDown':
//             moveTo(i + 1, j);
//             break;

//     }
// }

// // Returns the class name for a specific cell
// function getClassName(location) { // {i:3,j:5}
//     var cellClass = 'cell-' + location.i + '-' + location.j; // cell-3-5
//     return cellClass;
// }





// function drawNum(nums) {
//     return nums.pop()
// }

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// function playSound(soundWave) {
//     var sound = new Audio(soundWave);
//     sound.play();
// }

// function copyMat(mat) {
//     var newMat = [];
//     for (var i = 0; i < mat.length; i++) {
//         newMat[i] = [];
//         for (var j = 0; j < mat[0].length; j++) {
//             newMat[i][j] = {};
//             newMat[i][j] = Object.assign(newMat[i][j], mat[i][j]);
//         }
//     }
//     return newMat;
// }

// function getTime() {
//     return new Date().toString().split(' ')[4];
// }

// function startTimer() {
//     gStartTime = Date.now(); //  gStartTime - need to be global
//     gTimerInterval = setInterval(timeCycle, 1); //  gTimerInterval - need to be global
// }
// function timeCycle() {
//     var timeLater = Date.now();
//     var msTimeDiff = timeLater - gStartTime;
//     gGame.secsPassed = new Date(msTimeDiff).toISOString().slice(14, -1);
//     document.querySelector('.stopwatch').innerHTML = gGame.secsPassed; // if you want to print the time
// }

// // stop the timer
// function stopTimer() {
//     clearInterval(gTimerInterval);
// }

// function addOnlyOneSelected(className) {
//     document.querySelector('.medium').classList.remove('selected')
//     document.querySelector('.easy').classList.remove('selected')
//     document.querySelector('.diff').classList.remove('selected')
//     document.querySelector(className).classList.add('selected')
// }

// function renderFlagCount(flagCount) {
//     document.querySelector('.flagTd').innerHTML = '<img src="img/flagSign.png" alt="" class="flagSign"></img>X' + flagCount;
// }

// function renderSafeCount(safeCount) {
//     if (safeCount === 0) document.querySelector('.safeCountiner').innerHTML = '<img onclick="safe()" class="safe" src="img/safe0.png" alt="">X' + safeCount;
//     else document.querySelector('.safeCountiner').innerHTML = '<img onclick="safe()" class="safe" src="img/safe.png" alt="">X' + safeCount;
// }

// function renderHintOn(hintNumber) {
//     document.querySelector('.hint' + hintNumber).src = 'img/lightOn.png';
// }


// function restartLevelLives() {
//     if (gLevel.size === 4) {
//         gLevel.lives = 1;
//         gLevel.safe = 1;
//     }
//     if (gLevel.size === 8) {
//         gLevel.lives = 2;
//         gLevel.safe = 2;
//     }
//     if (gLevel.size === 12) {
//         gLevel.lives = 3;
//         gLevel.safe = 3;
//     }
//     renderHeartCount(gLevel.lives);
// }

// function renderHeartCount(heartCount) {
//     document.querySelector('.heartCountiner').innerHTML = getImgHTML('heart' + heartCount + '.png', 'heart');
// }

// function findSafeCell() {
//     var safeCells = [];
//     for (var i = 0; i < gBoard.length; i++) {
//         for (var j = 0; j < gBoard[0].length; j++) {
//             if (!gBoard[i][j].isMine && !gBoard[i][j].isMarked && !gBoard[i][j].isShowen) {
//                 safeCells.push({ i: i, j: j })
//                 console.log('i,j', i, j)
//             }
//         }
//     }
//     safeCells = shuffle(safeCells);
//     return drawNum(safeCells);
// }

// function pushStepGame() {
//     gMemoryStepBoard.push(copyMat(gBoard));
//     var newStepGame = {};
//     newStepGame = Object.assign(newStepGame, gGame);
//     gMemoryStepGame.push(newStepGame)
//     gIsFirstUndo = true;
// }

// function openModal() {
//     document.querySelector('.modal').style.display = 'inline';
//     if (gLevel.size === 4 && localStorage.bestScoreEasy) document.querySelector('.timeScore').innerHTML = '<br>' + localStorage.bestScoreEasy;
//     else if (gLevel.size === 8 && localStorage.bestScoreMed) document.querySelector('.timeScore').innerHTML = '<br>' + localStorage.bestScoreMed;
//     else if (gLevel.size === 16 && localStorage.bestScoreDiff) document.querySelector('.timeScore').innerHTML = '<br>' + localStorage.bestScoreDiff;
//     else document.querySelector('.timeScore').innerHTML = '<br> No best score found yet...';
// }


// function closeModal() {
//     document.querySelector('.modal').style.display = 'none';
// }


// function openModalHelp() {
//     document.querySelector('.modalHelp').style.display = 'inline';
// }


// function closeModalHelp() {
//     document.querySelector('.modalHelp').style.display = 'none';
// }