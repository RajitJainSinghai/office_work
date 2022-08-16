
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
    function calc() {
    var textValue1 = document.getElementById('input1').value;
    var textValue2 = document.getElementById('input2').value;

    document.getElementById('output').value = textValue1 * textValue2;
    
}


  function myFunction1() {
    var x = document.getElementById("myDIV1");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function calc1() {
    var textValue3 = document.getElementById('input3').value;
    var textValue4 = document.getElementById('input4').value;

    document.getElementById('output1').value = textValue3 * textValue4;
    
}

function myFunction2() {
  var x = document.getElementById("myDIV2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
  function calc2() {
  var textValue5 = document.getElementById('input5').value;
  var textValue6 = document.getElementById('input6').value;

  document.getElementById('output2').value = textValue5 * textValue6;
  
}
function result() {
  var x = document.getElementById('output').value;
  console.log(x);
  let y = document.getElementById('output1').value;
  let z = document.getElementById('output2').value;
  let a = x+y+z;
  document.getElementById('result').value = a;
}