'use strict'

function onBallClick(elBall, maxDiamater){
    var ballSize = elBall.offsetWidth + getRandomIntInclusive(20, 60)
    if (ballSize > maxDiamater) ballSize = 100
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerText = ballSize
    elBall.style.backgroundColor = getRandomColor()
}