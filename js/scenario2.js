var buttonup = new Audio("./files/AIs/buttonup.wav")

var rate = localStorage.getItem("rate");
function scene2aFn(){
  buttonup.play()
  var sceneA = document.getElementsByName("part1a")
  if (sceneA[0].checked == true){
    console.log("Scenario A auditory route option 1")
  } else if (sceneA[1].checked == true){
    console.log("Scenario A auditory route option 2")
  } else if (sceneA[2].checked == true){
    console.log("Scenario A auditory route option 3")
  } else {
    console.log("Choose an option for scenario A")
  }
}

function fdbk21Fn(){
  var fdbkA = document.getElementsByName("q21c[]")
  if(fdbkA[0].value=="") {
    console.log("Scenario A question 1 not answered ")
      }else{
        console.log(fdbkA[0].value)
   }
  if(fdbkA[1].value=="") {
    console.log("Scenario A question 2 not answered ")
      }else{
        console.log(fdbkA[1].value)
    }
  if(fdbkA[2].value=="") {
    console.log("Scenario A question 3 not answered ")
      }else{
        console.log(fdbkA[2].value)
    }
  if(fdbkA[3].value=="") {
    console.log("Scenario A question 4 not answered ")
      }else{
      console.log(fdbkA[3].value)
    }
  if(fdbkA[4].value=="") {
    console.log("Scenario A question 5 not answered ")
      }else{
        console.log(fdbkA[4].value)
    }
}

function scene2bFn(){
  buttonup.play()
  var sceneB = document.getElementsByName("part2a")
  if (sceneB[0].checked == true){
    console.log("Scenario B auditory route option 1")
  } else if (sceneB[1].checked == true){
    console.log("Scenario B auditory route option 2")
  } else if (sceneB[2].checked == true){
    console.log("Scenario B auditory route option 3")
  } else {
    console.log("Choose an option for scenario B")
  }
}

function fdbk22Fn(){
  var fdbkB = document.getElementsByName("q22c[]") 
  if(fdbkB[0].value=="") {
    console.log("Scenario B question 1 not answered ")
      }else{
        console.log(fdbkB[0].value)
   }
  if(fdbkB[1].value=="") {
    console.log("Scenario B question 2 not answered ")
      }else{
        console.log(fdbkB[1].value)
    }
  if(fdbkB[2].value=="") {
    console.log("Scenario B question 3 not answered ")
      }else{
        console.log(fdbkB[2].value)
    }
  if(fdbkB[3].value=="") {
    console.log("Scenario B question 4 not answered ")
      }else{
      console.log(fdbkB[3].value)
    }
  if(fdbkB[4].value=="") {
    console.log("Scenario B question 5 not answered ")
      }else{
        console.log(fdbkB[4].value)
    }
}

function scene2cFn(){
  buttonup.play()
  var sceneC = document.getElementsByName("part3a")
  if (sceneC[0].checked == true){
    console.log("Scenario C auditory route option 1")
  } else if (sceneC[1].checked == true){
    console.log("Scenario C auditory route option 2")
  } else if (sceneC[2].checked == true){
    console.log("Scenario C auditory route option3")
  } else {
    console.log("Choose an option for scenario C")
  }
}

function fdbk23Fn(){
  var fdbkC = document.getElementsByName("q23c[]") 
  if(fdbkC[0].value=="") {
    console.log("Scenario C question 1 not answered ")
      }else{
        console.log(fdbkC[0].value)
   }
  if(fdbkC[1].value=="") {
    console.log("Scenario C question 2 not answered ")
      }else{
        console.log(fdbkC[1].value)
    }
  if(fdbkC[2].value=="") {
    console.log("Scenario C question 3 not answered ")
      }else{
        console.log(fdbkC[2].value)
    }
  if(fdbkC[3].value=="") {
    console.log("Scenario C question 4 not answered ")
      }else{
      console.log(fdbkC[3].value)
    }
  if(fdbkC[4].value=="") {
    console.log("Scenario C question 5 not answered ")
      }else{
        console.log(fdbkC[4].value)
    }
}