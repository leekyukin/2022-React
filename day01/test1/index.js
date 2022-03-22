let count = document.getElementById("count-el");
let num = 0;

function increase() {
    num++;
    count.innerText = num;
}

function decrease() {
    num--;
    count.innerText = num;
}

function countDown() {
    for(let i = 4; i > 0; i--) {
        setTimeout(function () {
            count.innerText = i + 1;        
        },1000);
    }
}

function reset() {
    count.innerText = 0;
}

function save() {
    document.getElementById("NumberOfPeople").textContent = num;
    accessList();
}

function accessList() {
    document.getElementById("accessList").textContent +=  num;
    document.getElementById("accessList").textContent +=  " - ";   
}
