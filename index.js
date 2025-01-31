const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const score = document.querySelector(".score");
const roll = document.querySelector(".roll");
const reset = document.querySelector(".reset");
const start = document.getElementById("start");

let rollCount = 0;
let scoreCount = 0;

roll.addEventListener("click", () => {
    start.style.display = "none";
    const dice1Value = Math.floor(Math.random() * 6) + 1;
    const dice2Value = Math.floor(Math.random() * 6) + 1;
    dice1.src = `no${dice1Value}.png`;
    dice1.value = dice1Value;
    dice2.src = `no${dice2Value}.png`;
    dice2.value = dice2Value;
    scoreCount = dice1Value + dice2Value;
    rollCount++;
    score.textContent = `Scores: ${scoreCount}`;
});

reset.addEventListener("click", () => {
    start.style.display = "block";
    dice1.src = "no1.png";
    dice2.src = "no1.png";
    rollCount = 0;
    scoreCount = 0;
    score.textContent = `Scores: 0`;
});