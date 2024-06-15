'use strict'

function onBallClick(elBall){
    var ballSize = elBall.offsetWidth + 50
    if (ballSize > 400) ballSize = 100
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerText = ballSize
}