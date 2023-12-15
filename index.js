let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () =>{
    //rock,paper,scissors
    const options = ["rock","paper","scissors"];
   const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game draw , play again!"
    msg.style.backgroundColor = "white";



}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }else
   {
    compScore++;
    compScorePara.innerText = compScore
    console.log("You loose");
    msg.innerText = `You loose,${compChoice} beats your ${userChoice} `;
    msg.style.backgroundColor = "red";

   }
}


const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    const compChoice = getCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice ==="rock"){
            //sissors,paper
           userWin = compChoice === "paper" ? false : true ;
        }else if (userChoice ==="paper"){
            //rock , scissors
            userWin = compChoice ==="rock" ? true : false ;
        }else if (userChoice === "scissors"){
            //rock , paper
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin , userChoice , compChoice);

        

    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
       const userChoice= choice.getAttribute("id");
       playGame(userChoice);
    });
});