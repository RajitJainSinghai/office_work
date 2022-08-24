/********* Zero ************************* */
$(document).ready(function(){
  $('#show0').click(function() {
    $('.menu0').toggle("slide");
  });
});
  function calc0() {
    var textValue1 = document.getElementById('input1').value;
    var textValue2 = document.getElementById('input2').value;
    document.getElementById('output0').value = textValue1 * textValue2;
    result();
}
/********* First************************* */


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
/********* Second ************************* */

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
/********* Third ************************* */

$(document).ready(function(){
  $('#show3').click(function() {
    $('.menu3').toggle("slide");
  });
});
  function calc3() {
  var textValue7 = document.getElementById('input7').value;
  var textValue8 = document.getElementById('input8').value;
  document.getElementById('output3').value = textValue7 * textValue8;
 result();
}

/********* Fourth ************************* */

$(document).ready(function(){
  $('#show4').click(function() {
    $('.menu4').toggle("slide");
  });
});
  function calc4() {
  var textValue9 = document.getElementById('input9').value;
  var textValue10 = document.getElementById('input10').value;
  document.getElementById('output4').value = textValue9 * textValue10;
 result();
}

/********* Fivth ************************* */

$(document).ready(function(){
  $('#show5').click(function() {
    $('.menu5').toggle("slide");
  });
});
  function calc5() {
  var textValue11 = document.getElementById('input11').value;
  var textValue12 = document.getElementById('input12').value;
  document.getElementById('output5').value = textValue11 * textValue12;
 result();
}

function result() {
  let x = document.getElementById('output0').value;
  let y = document.getElementById('output1').value;
  let z = document.getElementById('output2').value;
  let a = document.getElementById('output3').value;
  let b = document.getElementById('output4').value;
  let c = document.getElementById('output5').value;



  // console.log(x+y+z);
  let abc = Number(x) + Number(y) + Number(z) + Number(a) + Number(b) + Number(c);
  
  document.getElementById("result").value = abc;
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
