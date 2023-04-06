"use strict";

let ball = document.querySelector('#ball');
let bar = document.querySelector('#bar');
let general = document.querySelector('#general')
let barX = 0;
let ballX = 0;
let ballY = 0;
let ballMx = 5;
let ballMy = 5;
let count = 0;


onkeydown = barMove;
let set = setInterval(ballMove, 40);


function barMove(e) {
    if (e.keyCode == 39 || e.keyCode == 68) {
        if (barX < 700) {
            barX += 25;
        }
        console.log(barX);
    }

    if (e.keyCode == 37 || e.keyCode == 65) {
        if (barX > 0) {
            barX -= 25;
        }
    }


    bar.style.left = barX + 'px';

}


function ballMove() {
    if (ballX < 0 || ballX > 745) {
        ballMx *= -1;
    }

    if (ballY < 0) {
        ballMy *= -1;
    } else if (ballY > 550 && ballX >= barX - 25 && ballX <= barX + 75) {
        count++;
        ballMx += 1;
        ballMy += 1;
        ballMy *= -1;
        ScoreBar(count);

    } else if (ballY > 550) {
        let result = confirm(`Play Again? Your Score: ${count} `);
        clearInterval(set);
        if (result) {
            location.reload();
        }
    }


    ballX += ballMx;
    ballY += ballMy;


    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';

}

function ScoreBar(count) {
    let score = document.querySelector('#score')
    let rgb=ColorGenerator();

    ball.style.backgroundColor = rgb;
    general.style.borderColor = rgb;
    bar.style.backgroundColor = rgb;

    score.innerHTML = '00000' + count;
}

function ColorGenerator() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let rgb = "rgb(" + r + "," + g + "," + b + ")"
    return rgb;
}