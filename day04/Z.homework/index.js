const btnEl = document.getElementById("btn-el");
const pEl = document.getElementById("p-el");

const HEX =  "0123456789ABCDEF"; 

function getRandomColor() {

    let color = ['#'];
    let randCode;
    for(let i = 0; i < 3; i++) {
        randCode = Math.floor(Math.random() * HEX.length);
        color.push(HEX[randCode]);
    }
    console.log(color);
    return color.join('');
}

btnEl.addEventListener("click", function () {
    color = getRandomColor();
    pEl.innerText = color;
    document.body.style.backgroundColor =  color;
    
})