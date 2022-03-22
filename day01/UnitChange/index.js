var toggle = 0;

function inch() {
    var cm = document.getElementById("cm").value;
    document.getElementById("result1").textContent = cm / 2.54;
}

function cm() {
    var inch = document.getElementById("inch").value;
    document.getElementById("result2").textContent = inch * 2.54;
}

function changeUnit() {
    if (toggle % 2 == 0) {
        document.getElementById("1").classList.add("hidden");
        document.getElementById("2").classList.remove("hidden");
    }
    else {
        document.getElementById("2").classList.add("hidden");
        document.getElementById("1").classList.remove("hidden");
    }
    console.log(toggle);
    toggle++;
}

