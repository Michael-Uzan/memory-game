'use strict'

function startTrail() {
    if (loadFromStorage(isTrailLocalStorage)) return
    gElBody.classList.add('trail-step-1')
    toggleModal('trailStep2', 'Next', 'Welcome!', 'See here your game Status: <br/> <br/> Time <br/> Moves <br/> Board size', 'Press next to countinue')
}

function trailStep2() {
    gElBody.classList.remove('trail-step-1')
    gElBody.classList.add('trail-step-2')
    toggleModal()
    toggleModal('trailStep3', 'Next', 'Game Settings', 'Press on this buttn to change game settings', 'Press next to countinue')
}

function trailStep3() {
    gElBody.classList.remove('trail-step-2')
    gElBody.classList.add('trail-step-3', 'settings-open')
    gElModal.classList.add('align-right')
    toggleModal()
    toggleModal('finishTrail', 'Finish', 'Game Settings', 'Change here Parametres: <br/> <br/> Board Type <br/> Time <br/> Size <br/> Etc... <br/>', 'Press finish to start playimg')
}

function finishTrail() {
    toggleModal()
    gElBody.classList.remove('trail-step-3', 'settings-open')
    gElModal.classList.remove('align-right')
    saveToStorage(isTrailLocalStorage, true)
}