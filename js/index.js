
let randomNumber1;
let randomNumber2;

let j = 0;
let time = setInterval(test, 100);

function test() {
    // generate 2 numbers beween 1 to 6
    randomNumber1 = generateNumber();
    randomNumber2 = generateNumber();
    let image2 = "dice" + randomNumber2 + ".png";
    let image1 = "dice" + randomNumber1 + ".png";
    // select class img1 and replace it by image + generateNumber
    var img1 = document.getElementById("dice1");
    img1.querySelector(".img1").src = "images/" + image1;


    var img2 = document.getElementById("dice2");
    img2.querySelector(".img2").src = "images/" + image2;
    // select class img1 and replace it by image + generateNumber
    if (j == 10) {
        complete();
    }
    j++;
}



function complete() {
    clearInterval(time);
    time == null;
    result(randomNumber1, randomNumber2);
}

function generateNumber() {

    return Math.floor(Math.random() * 6) + 1;
}

function result(score1, score2) {
    if (randomNumber1 > randomNumber2) {
        let x = document.querySelector("h2");
        x.innerText = "Player 1 won";
        x.classList.add("show");
       // alert("Player 1 won !!");
    } else if (randomNumber1 < randomNumber2) {
        let y = document.querySelector("h2");
        y.innerText = "Player 2 won";
        y.classList.add("show");
    } else {
        let z = document.querySelector("h2");
        z.innerText = "Egalite";
        z.classList.add("show");
    }
}