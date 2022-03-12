'use strict'
const ROBOT_QUANTITY = 15;
const ROBOT_URL = 'https://robohash.org/'

async function getRobotsBoard() {
    const robotsBoard = await _generateRobotsBoard()
    return robotsBoard
}

async function _generateRobotsBoard() {
    const robotsBoard = []
    const randomNum = getRandomInt(0, 300)
    for (let i = randomNum; i < (ROBOT_QUANTITY + randomNum); i++) {
        const robot = _buildRobotData((i + 1))
        const robotPair = { ...robot, _id: makeId() }
        robotsBoard.push(robot, robotPair)
    }
    return robotsBoard
}

function _buildRobotData(matchNumber) {
    let img = new Image()
    img.src = `${ROBOT_URL}${matchNumber}`
    return {
        _id: makeId(),
        matchNumber,
        isShowen: false,
        imgUrl: `${ROBOT_URL}${matchNumber}`,
    }
}