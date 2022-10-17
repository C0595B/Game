let homiesScore = 0;
let oppsScore = 0;
const homiesScore_span = document.getElementById("homies-score");
const oppsScore_span = document.getElementById("opps-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scizzzzzzerrz_div = document.getElementById("s");




function getOppsChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scizzzzzzerrz";


}

function win(homiesChoice, oppsChoice) {
    homiesScore++;
    homiesScore_span.innerHTML = homiesScore;
    oppsScore_span.innerHTML = oppsScore;
    result_p.innerHTML = `${convertToWord(homiesChoice)} Upped The Glock On ${convertToWord(oppsChoice)}. The Opps Are Down Bad!`;
}

function lose(homiesChoice, oppsChoice) {
    oppsScore++;
    homiesScore_span.innerHTML = homiesScore;
    oppsScore_span.innerHTML = oppsScore;
    result_p.innerHTML = `${convertToWord(homiesChoice)} Got Stomped Out By ${convertToWord(oppsChoice)}. We're Down Bad! Spin The Block!!`;
}

function draw(homiesChoice, oppsChoice) {
    result_p.innerHTML = `${convertToWord(homiesChoice)} Is Neck And Neck With ${convertToWord(oppsChoice)}. Spin The Block!!`;
}

function game(homiesChoice){
    const oppsChoice = getOppsChoice();
    switch (homiesChoice + oppsChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(homiesChoice, oppsChoice);
         break;
        case "rp":
        case "ps":
        case "sr":
            lose(homiesChoice, oppsChoice);          
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(homiesChoice, oppsChoice);    
            break;

            }
}



function main () 
{
    rock_div.addEventListener('click', function() {
        game("r");
})

paper_div.addEventListener('click', function() {
    game("p");
})

scizzzzzzerrz_div.addEventListener('click', function() {
    game("s");
})


}

main ();