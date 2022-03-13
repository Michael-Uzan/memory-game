'use strict'

const ROBOT_QUANTITY = 100;
const ROBOT_URL = 'https://robohash.org/'

async function getRobotsBoard() {
    const robotsBoard = await _generateRobotsBoard()
    return robotsBoard
}

async function _generateRobotsBoard() {
    const robotsBoard = []
    for (let i = 0; i < ROBOT_QUANTITY; i++) {
        const robot = _buildRobotData((i + 1))
        const robotPair = duplicatePairCard(robot)
        robotsBoard.push(robot, robotPair)
    }
    return robotsBoard
}

function _buildRobotData(matchNumber) {
    loadImgToCache(`${ROBOT_URL}${matchNumber}`)
    return {
        _id: makeId(),
        matchNumber,
        isShowen: false,
        imgUrl: `${ROBOT_URL}${matchNumber}`,
    }
}