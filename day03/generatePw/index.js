
const chars = "1234567890ABCDEFGHIJKLMNOPQRXTUVWXYZabcdefghijklmnopqrxtuvwxyz~!@#$%^&*()₩?/><";
const pwList = document.getElementById("pw-list");
const generateBtn = document.getElementById("generate-btn");



generateBtn.addEventListener( "click", function ()  {
    for(let i = 0; i < 4; i++) {
        let pwLength = Math.floor(Math.random() * 17)  + 8;
        var pw = [];

        for(let j = 0; j < pwLength; j++) {
            let n = Math.floor(Math.random() * chars.length) ;
            pw[j] = chars[n];
        }
        
        let result = "";

        for(let j = 0; j < pwLength; j++) {
            result += pw[j];
        }

        pwList.innerHTML += `
            <input type="button" id="pw${i}" onclick="getResult(this.id)" value="${result}">
        `;

        console.log(pwList);

    }
});


let resultEl = document.getElementById("result-el");

function getResult(resultId) {
    resultEl.innerText = resultId.value;
}

