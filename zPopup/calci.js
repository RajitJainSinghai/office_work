/****************** Flatter ************************************/
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
        document.getElementById("area_p").innerText = y+" pack";
    }
    var z = y * packPrice;
    document.getElementById("area_prices_h3").innerText = "$ "+z; 
}

/****************Modal********************************** */
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}