const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const score = document.querySelector(".score");
const roll = document.querySelector(".roll");
const reset = document.querySelector(".reset");
const start = document.getElementById("start");

let rollCount = 0;
let scoreCount = 0;
let point;

roll.addEventListener("click", () => {
    rollCount++;
    const dice1Value = Math.floor(Math.random() * 6) + 1;
    const dice2Value = Math.floor(Math.random() * 6) + 1;
    dice1.src = `no${dice1Value}.png`;
    dice2.src = `no${dice2Value}.png`;
    scoreCount = dice1Value + dice2Value;
    score.textContent = `Scores: ${scoreCount}`;

    if (scoreCount === 7 && rollCount === 1) {
        start.textContent = "You won!";
    } else if ((scoreCount === 2 || scoreCount === 3 || scoreCount === 12) && rollCount === 1) {
        start.textContent = "You lost! the house wins";
        rollCount = 0;
        point;
    } else if (rollCount != 7 && rollCount === 1) {
        point = scoreCount;
        start.textContent = "The reach point is: " + point;
    } else if (scoreCount === point) {
        start.textContent = "You won!";
        rollCount = 0;
        point;
    } else if (scoreCount === 7 && rollCount != 1) {
        start.textContent = "You lost! the house wins";
        rollCount = 0;
        point;
    }
});

reset.addEventListener("click", () => {
    start.textContent = "Roll the dice";
    dice1.src = "no1.png";
    dice2.src = "no1.png";
    rollCount = 0;
    scoreCount = 0;
    point;
    score.textContent = `Scores: 0`;
});