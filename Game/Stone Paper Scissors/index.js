
let  score = {
    wins : 0,
    loses : 0,
    tie : 0
};

function updatescorefunction(){
    document.querySelector(".score").innerHTML =  `Wins: ${score.wins} | Loses: ${score.loses} | Ties: ${score.tie}`;
    }

function reset() {
    score.wins = 0;
    score.loses = 0;
    score.tie = 0;
    updatescorefunction();
    document.querySelector(".choice_A").innerHTML = "";
    document.querySelector(".choice_B").innerHTML = "";
}

function playgame(move){
    
    let computerMove = pickcomputerMove();
    let result = "";
    
    if(move==="stone") {
        if(computerMove=== "stone")
        {
            result = "Tie";
        }
        else if(computerMove==="paper")
        {
            result = "You Lose";
        }
        else if(computerMove==="scissors")
        {
            result = "You Win";
        }
    }
    if(move==="paper") {
        if(computerMove==="stone")
        {
            result = "You Win";
        }
        else if(computerMove==="paper")
        {
            result = "Tie";
        }
        else if(computerMove==="scissors")
        {
            result = "You Lose";
        }
    }
    if(move==="scissors") {
        if(computerMove==="stone")
        {
            result = "You Lose";
        }
        else if(computerMove==="paper")
        {
            result = "You Win";
        }
        else if(computerMove==="scissors")
        {
            result = "Tie";
        }
    }
    if(result === "You Win"){
        score.wins+=1;
    }
    else if(result === "You Lose") {
        score.loses+=1;
    }
    else if(result=== "Tie")
    {
        score.tie+=1;
    }
    updatescorefunction();
    
document.querySelector(".choice_A").innerHTML = result;
document.querySelector(".choice_B").innerHTML = `You choose ${move} and computer choose ${computerMove}`;

    
}



function pickcomputerMove() {
    const randomNumber = Math.random();
    let computerMove = "";
    
    if(randomNumber>=0 && randomNumber<1/3)
    {
        computerMove = "stone";
    }
    else if(randomNumber>=1/3 && randomNumber<2/3)
    {
        computerMove = "paper";
    }
    else if(randomNumber>=2/3 && randomNumber<1)
    {
        computerMove = "scissors";
    }
    return computerMove;
}

