/********* first ************************* */

$(document).ready(function(){
  $('#show').click(function() {
    $('.menu').toggle("slide");
  });
});
    function calc() {
    var textValue1 = document.getElementById('input1').value;
    var textValue2 = document.getElementById('input2').value;

    document.getElementById('output').value = textValue1 * textValue2;
    result();
}
/********* second************************* */


$(document).ready(function(){
  $('#show1').click(function() {
    $('.menu1').toggle("slide");
  });
});
  function calc1() {
    var textValue3 = document.getElementById('input3').value;
    var textValue4 = document.getElementById('input4').value;
    document.getElementById('output1').value = textValue3 * textValue4;
    result();
}
/********* third ************************* */

$(document).ready(function(){
  $('#show2').click(function() {
    $('.menu2').toggle("slide");
  });
});
  function calc2() {
  var textValue5 = document.getElementById('input5').value;
  var textValue6 = document.getElementById('input6').value;
  document.getElementById('output2').value = textValue5 * textValue6;
 result();
}

function result() {
  let x = document.getElementById('output').value;

  let y = document.getElementById('output1').value;
  let z = document.getElementById('output2').value;
  // console.log(x+y+z);
  let a = Number(x) + Number(y) + Number(z);
  
  document.getElementById("result").value = a;
}

/******************** modal ************************ */
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
/*********************************************** */
$(document).ready(function(){
  $('#show').click(function() {
    $('.menu').toggle("slide");
  });
});