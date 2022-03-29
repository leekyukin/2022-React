
// function word() {
//     let randomChar = Math.floor(Math.random % )
// }


function generate() {

    for(let i = 0; i < 4; i++) {
        let length = Math.floor(Math.random % 17) + 8;
        let pw = [];

        for(let j = 0; j < length; j++) {
            pw[i] = Math.random().toString(36).slice(2);
        }
    }
    
    for(var i = 0; i < length; i++) {
        console.log(pw[i]);
    }
}

document.getElementById("generate-btn").addEventListener("click", generate());