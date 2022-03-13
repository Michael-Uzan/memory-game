'use strict'

const profileURL = 'https://randomuser.me/api/?results=100'

async function getPeoplesBoard() {
    const profilesBoard = await _generatePeoplesBoard()
    return profilesBoard
}

async function _generatePeoplesBoard() {
    const profileBoard = []
    const res = await axios.get(profileURL)
    res.data.results.forEach((result, idx) => {
        const people = _buildPeopleData(result, idx + 1)
        const peoplePair = duplicatePairCard(people)
        profileBoard.push(people, peoplePair)
    })
    return profileBoard
}

function _buildPeopleData(result, matchNumber) {
    loadImgToCache(result.picture.large)
    return {
        _id: makeId(),
        matchNumber,
        isShowen: false,
        imgUrl: result.picture.large,
    }
}