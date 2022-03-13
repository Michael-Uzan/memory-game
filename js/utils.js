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

function getRandomEvenInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let random = Math.floor(Math.random() * (max - min)) + min; //including minimum
    return +random * 2

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

function duplicatePairCard(card) {
    return { ...card, _id: makeId() }
}

function loadImgToCache(imgUrl) {
    let img = new Image()
    img.src = imgUrl
}
