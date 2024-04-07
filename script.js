let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
let userScorep= document.querySelector("#user-score");
let compScorep= document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const ranDindx = Math.floor(Math.random() * 3); //phle random number generate kiya
    return options[ranDindx]; //phir iss random number ko option k index mei daal kr return kr diya 
}
const drawGame = () => {
   // console.log("game was draw");
    msg.innerText= "Match Draw...Play Again";
    msg.style.backgroundColor=" #081b31"
}
const showWinner=(userWin,userChoice,compChice)=>{
    if(userWin){
        userScore++;
        userScorep.innerText= userScore;
        //console.log("You are a winner");
        msg.innerText=`You Win!! your ${userChoice} beats ${compChice}`;
        msg.style.backgroundColor="green"
    }else{
        compScore++;
        compScorep.innerText=compScore;
      // console.log("You loose");
       msg.innerText=`You lose.. ${compChice} beats your ${userChoice}`;
       msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice) => {
    //console.log("user choice =", userChoice);
    //generate computer choice
    const compChice = genCompChoice();
    //console.log("comp choice", compChice);

    if (userChoice === compChice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissor paper
            userWin = compChice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock scissor
            userWin = compChice === "scissor" ? false : true;
        }
        else {
            //rock paper
            userWin = compChice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChice);
    }
}

choices.forEach((choice) => {
   // console.log(choice)
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        //    console.log("choice was clicked",choiceId);
        playGame(userChoice);
    });
});