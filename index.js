function genderFn(inp){
  if (inp == "other"){
    document.getElementById('genother').style.display = "inline" 
  } else {
    document.getElementById('genother').style.display = "none" 
  } 
}

function empFn(inp){
  if (inp == "Other"){
    console.log(inp)
    document.getElementById('empother').style.display = "inline" 
  } else {
    document.getElementById('empother').style.display = "none" 
  } 
}

function ethnicFn(inp){
  if (inp == "Other"){
    document.getElementById('ethother').style.display = "inline" 
  } else {
    document.getElementById('ethother').style.display = "none" 
  } 
}

function bigImg(x) {
  
  x.style.height = "20px";
  x.style.width = "20px";
}

function normalImg(x) {
  x.style.height = "12px";
  x.style.width = "12px";
}

function walkingappsFn(answer){
    document.getElementById(answer+'Question').style.display = "block";
  
    if (answer == "yes") { // hide the div that is not selected
        document.getElementById('noQuestion').style.display = "none";
    } else if (answer == "no") {
      document.getElementById('yesQuestion').style.display = "none"
    }
  
  }

function safeappsFn(answer){
  if (answer == "never"){
    document.getElementById('noQuestion').style.display = "block";
    document.getElementById('yes2Question').style.display = "none";
  }
  else {
      document.getElementById('yes2Question').style.display = "block";
      document.getElementById('noQuestion').style.display = "block";
    }
  }

  

