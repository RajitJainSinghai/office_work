let pack = 1.99;
let packPrice = 55.76;



function flater() {
    var x = document.getElementById("flatter").value;
    if(x < 0) {
        alert("please enter the positive value");
    }
    else {
        y1 = x/pack;
        y = Math.ceil(y1);
        document.getElementById("pack").value = y+" pack";
    }
    var z = y * packPrice;
    document.getElementById("result").value = "$ "+z; 
}