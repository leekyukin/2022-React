
function rand(start, end)
{
    return Math.floor((Math.random() * (end-start+1)) + start);
}

var cards = [];
let n = 0;
let sum = 0;


let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let hasBlackJack = false;
let isAlive = true;

let player = {
    name: '홍길동',
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
    document.getElementById('startGame').classList.add('hidden');
    newCard();
    newCard();
}

function renderGame() { 
    cardsEl.textContent = "Cards : ";
    sumEl.textContent = "Sum : ";

    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i];
    }
    sumEl.textContent += sum;

    let message = '';

    if (sum < 21) {
        message = "YOU WANNA DRAW RIGHT?";
        textSum = sum;
    }
    else if (sum === 21) {
        alert("YOU WIN!!");
        textSum = sum;
        hasBlackJack = true;
    } 
    else {
        message = "YOU LOSE!!";
        textSum = sum;
        isAlive = false;
    }

    if(isAlive == false) {
        document.getElementById('newCard').classList.add('hidden');
    }
    messageEl.textContent = message;
}

function newCard() {
    let n = rand(1,13)
    cards.push(n);
    sum += n;

    renderGame();
}