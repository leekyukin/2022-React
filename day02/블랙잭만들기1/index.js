
function rand(start, end)
{
    return Math.floor((Math.random() * (end-start+1)) + start);
}

let firstCard = rand(1, 14);
let secondCard = rand(1, 14);
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message;

if (sum < 21) {
    message = "YOU WANNA DRAW RIGHT?";
}
else if (sum === 21) {
    message("YOU WIN!!");
    hasBlackJack = true;
} 
else {
    message = "YOU LOSE!!";
    isAlive = false;
}

console.log(message);