let randomNum = Math.round(Math.random())
//User's guess
let choice = prompt("Please enter H for Heads or T for Tails: ")

//Check for the condition
if (randomNum <= 30)
{
    if (choice == 'H') {alert("The flip was heads and you chose heads...you win!")}
    else if (choice == 'T'){alert('The flip was heads but you chose tails...you lose!')}
    else{alert("Your input is invalid.")}
}
else
{
    if (choice == 'T') {alert("The flip was tails and you chose tails...you win!")}
    else if (choice == 'H'){alert('The flip was tails but you chose heads...you lose!')}
    else{alert("Your input is invalid.")}
}
