function consentFn(){
  var consentBtn = document.getElementById("consent")
      if(consentBtn.checked) {
        console.log("consented")
      }else{
        console.log("You must consent to move forward")
    }
}

function nameFn(){
  var fnameBtn = document.getElementById("fname").value
  if(fnameBtn=="") {
    console.log("name field empty")
  } else{
    console.log(fnameBtn)
  }
  var lnameBtn = document.getElementById("lname").value
  if(lnameBtn=="") {
    console.log("name field empty")
  } else{
    console.log(lnameBtn)
  }
}

function genderFn(){
  var genderBtn = document.getElementsByName("gender")
  if (genderBtn[0].checked == true){
    console.log("Male")
    } else if (genderBtn[1].checked == true){
      console.log("Female")
    } else if (genderBtn[2].checked == true){
      console.log("Other")
    } else if (genderBtn[3].checked == true){
      console.log("Prefer not to say")
    }else{
      console.log("gender button unchecked") 
    } 
  }

function ageFn(){
  var ageBtn = document.getElementById("age").value
  if(ageBtn=="") {
    console.log("age field empty")
  } else{
    console.log(ageBtn)
  }
}

function preferFn(){   
  console.log("Prefer not to say");
}

function locFn(){
  var locBtn = document.getElementById("loc").value
  if(locBtn=="") {
    console.log("location field empty")
  }else{
    console.log(locBtn)
  }
}

function langFn(){
  var langBtn = document.getElementsByName("lang")
  if (langBtn[0].checked == true){
    console.log("Native speaker")
  } else if (langBtn[1].checked == true){
    console.log("Second language")
  } else if (langBtn[2].checked == true){
    console.log("Conversationally fluent")
  } else if (langBtn[3].checked == true){
  console.log("other")
  }
}

function changelangradioother() {
  var other = document.getElementById("langother").value; 
  console.log(other.value)
}

function sightFn(){
  var sightBtn = document.getElementsByName("sight")
  if (sightBtn[0].checked == true){
    console.log("totally blind")
  } else if (sightBtn[1].checked == true){
    console.log("partially sighted")
  } else if (sightBtn[2].checked == true){
    console.log("other")
  }
}

function sightpreferFn(){   
  console.log("Prefer not to say");
}

function changesightradioother() {
  var other = document.getElementById("sightother"); 
  other.value = document.getElementById("inputother").value;
  console.log(other.value)
}


function onsetFn(){
  var onsetBtn = document.getElementById("onset").value
  if(onsetBtn=="") {
    console.log("onset field empty")
  }else{
    console.log(onsetBtn)
  }
}
  
function onsetpreferFn(){   
  console.log("Prefer not to say");
}


function asstechFn(){
  var asstechBtn = document.getElementById("asstech").value
  if(asstechBtn=="") {
     console.log("asstech field empty")
   }else{
     console.log(asstechBtn)
   }
}

function asspreferFn(){   
  console.log("Prefer not to say");
}

function tacmapFn(){
  var tacmapBtn = document.getElementsByName("tacmap")
  if (tacmapBtn[0].checked == true){
    console.log("Never used tactile maps")
  } else if (tacmapBtn[1].checked == true){
    console.log("Occasionally use tactile maps")
  } else if (tacmapBtn[2].checked == true){
    console.log("Often use tactile maps")
  } else if (tacmapBtn[3].checked == true){
    console.log("Regularly use tactile maps")
  } else {
    console.log("tacmap empty")
  }
}


function tacpreferFn(){   
  console.log("Prefer not to say");
}

function tacmapelab(){
  var elabBtn = document.getElementById("elab").value
  if(elabBtn=="") {
    console.log("tacmap elab empty")
   } else {
    console.log(elabBtn)
   }  
}


function printmapFn(){
  var printmapBtn = document.getElementsByName("printmap")
  if (printmapBtn[0].checked == true){
    console.log("Never used print maps")
  } else if (printmapBtn[1].checked == true){
    console.log("Occasionally use print maps")
  } else if (printmapBtn[2].checked == true){
    console.log("Often use print maps")
  } else if (printmapBtn[3].checked == true){
    console.log("Regularly used print maps")
  } else {
    console.log("printmap unchecked")
  }
}

function printmapelab(){
  var printelabBtn = document.getElementById("printelab").value
  if(printelabBtn=="") {
    console.log("printmap elab empty")
    }else{
    console.log(printelabBtn) 
  }
}

function printpreferFn(){   
  console.log("Prefer not to say");
}


function googlemapFn(){
  var googlemapBtn = document.getElementsByName("googlemap")
  if (googlemapBtn[0].checked == true){  
    console.log("Never used print maps")
  } else if (googlemapBtn[1].checked == true){
    console.log("Occasionally use print maps")
  } else if (googlemapBtn[2].checked == true){
    console.log("Often use print maps")
  } else if (googlemapBtn[3].checked == true){
    console.log("Regularly used print maps")
  } else {
    console.log("googlemap unchecked")
  }
}

function googlemapelab(){
  var googleelabBtn = document.getElementById("googleelab").value
  if(googleelabBtn=="") {
    console.log("googlemap elab empty")
      }else{
        console.log(googleelabBtn)
      }
    }

    function printpreferFn(){   
      console.log("Prefer not to say");
    }
