// console.log("Hello World");

let humanScore = 0;
let computerScore = 0;
function getComputerChoice()
{
    let n = (Math.random() * 100);
    if(n < 33)
        return "rock";
    else if(n < 66)
        return "paper";
    else
        return "scissor";
}

function getHumanChoice()
{
    let choice = prompt("Enter your choice: rock/paper/scissor ?");
    return choice;
}

function playRound()
{
    console.log("Lets start !!");

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    humanChoice = humanChoice.toLowerCase();
    while(computerChoice === humanChoice)
            computerChoice = getComputerChoice();

    let result = false;
    if(humanChoice === "rock")
    {
        if(computerChoice === "paper")
            result = false;
        else
            result = true;
    }
    if(humanChoice === "paper")
    {
        if(computerChoice === "scissor")
            result = false;
        else
            result = true;
    }
    if(humanChoice === "scissor")
    {
        if(computerChoice === "rock")
            result = false;
        else
            result = true;
    }

    if(result)
    {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else
    {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}
function playGame()
{
    humanScore = 0;
    computerScore = 0;
    for(let i =0;i<5;i++)
            playRound();

    console.log(`Your score:${humanScore} Computer score:${computerScore}`);
    if(humanScore > computerScore)
        console.log("Congratulations !! You have won ");
    else
        console.log("Alas! Better luck nexxt time ");

}
playGame();
// console.log(getComputerChoice());
// console.log(getHumanChoice());



