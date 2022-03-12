'use strict'
const profileURL = 'https://randomuser.me/api/?results=15'

async function getProfilesBoard() {
    const profilesBoard = await _generateProfilesBoard()
    return profilesBoard
}

async function _generateProfilesBoard() {
    const profileBoard = []
    const res = await axios.get(profileURL)
    res.data.results.forEach((result, idx) => {
        const profile = _buildProfileData(result, idx + 1)
        const profilePair = { ...profile, _id: makeId() }
        profileBoard.push(profile, profilePair)
    })
    return profileBoard
}

function _buildProfileData(result, matchNumber) {
    loadImgToCache(result.picture.large)
    return {
        _id: makeId(),
        matchNumber,
        isShowen: false,
        imgUrl: result.picture.large,
    }
}