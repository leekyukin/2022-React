
const chars = "1234567890ABCDEFGHIJKLMNOPQRXTUVWXYZabcdefghijklmnopqrxtuvwxyz~!@#$%^&*()₩?/><";
const pwList = document.getElementById("pw-list");
const generateBtn = document.getElementById("generate-btn");


function generate() {

    
}

generateBtn.addEventListener( "click", function ()  {
    for(let i = 0; i < 4; i++) {
        let pwLength = Math.floor(Math.random() * 17)  + 8;
        var pw = [];

        console.log(pwLength + 'sdf');

        for(let j = 0; j < pwLength; j++) {
            let n = Math.floor(Math.random() * chars.length) ;
            pw[j] = chars[n];
        }
        
        let result = "";

        for(let j = 0; j < pwLength; j++) {
            result += pw[j];
        }

        pwList.innerHTML += `
            <li id="pw${i + 1}">${result}</li>
        `;

        console.log(pwList);

    }
});

let pw1 = document.getElementById("pw1");
let pw2 = document.getElementById("pw2");
let pw3 = document.getElementById("pw3");
let pw4 = document.getElementById("pw4");
let resultEl = document.getElementById("result-el");

function getResult() {
    let result = pw1.value;
    resultEl.innerText = result;
}


pw1.addEventListener("click", getResult());
pw