var pass = false
var buttonup = new Audio("./files/AIs/buttonup.wav")

function goingfwd(){
  location.href = "http://webprojects.eecs.qmul.ac.uk/na328/CsubC.html";
  // <a href="http://webprojects.eecs.qmul.ac.uk/na328/CsubA.html"></a>
}

function scene3c1Fn(){
  buttonup.play()
  if (pass==true){
    postStuff()
    pass = false
  }
  else{
    console.log("pass is false")
  }
  var fdbkA = document.getElementsByName("q3c1[]")
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
function scene3c2Fn(){
  buttonup.play()
  if (pass==true){
    postStuff()
    pass = false
  }
  else{
    console.log("pass is false")
  }
  var fdbkA = document.getElementsByName("q3c2[]")
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
function scene3c3Fn(){
  buttonup.play()
  if (pass==true){
    postStuff()
    pass = false
  }
  else{
    console.log("pass is false")
  }
  var sceneB = document.getElementsByName("part3c")
  if (sceneB[0].checked == true){
    console.log("Scenario C route description option 1")
  } else if (sceneB[1].checked == true){
    console.log("Scenario C route description option 2")
  } else if (sceneB[2].checked == true){
    console.log("Scenario C route description option 3")
  } else {
    console.log("Choose an option for scenario C")
  }
}

var rate = localStorage.getItem("rate");
if (rate!=1 || rate!=2 || rate!=3){rate=3}
var address = "./files/speech/scenario3/scenario3-c/rate"+rate

var num = 0;
var playVal = false
var pauseVal= true

var spk =  [new Audio(address+"/spk1.mp3"), new Audio(address+"/spk2.mp3"), new Audio(address+"/spk3.mp3"), new Audio(address+"/spk4.mp3"), new Audio(address+"/spk5.mp3"), new Audio(address+"/spk6.mp3"), new Audio(address+"/spk7.mp3"), new Audio(address+"/spk8.mp3")]

var shop1poi = new Audio("./files/AIs/shops.mp3")
var cafe1poi = new Audio("./files/AIs/cafe.mp3")
var shop2poi = new Audio("./files/AIs/shops.mp3")
var cafe2poi = new Audio("./files/AIs/cafe.mp3")
var highwaypoi= new Audio("./files/AIs/road.wav")
var pedpoi    = new Audio("./files/AIs/pelican.mp3")
var river1poi = new Audio("./files/AIs/river.mp3")
var river2poi = new Audio("./files/AIs/river.mp3")
var AI = [shop1poi, cafe1poi, shop2poi, cafe2poi, highwaypoi, pedpoi, river1poi, river2poi] 
var AB = [new Audio("./files/EC/open.wav"), new Audio("./files/EC/close.wav"), new Audio("./files/EC/open.wav"), new Audio("./files/EC/close.wav")]
var spkarray = [0,1, 4, 9, 12, 14, 18, 21]

ARO = [spk[0], spk[1], AB[0], AI[0], spk[2], AB[1], AI[1], AI[2], AB[2], spk[3], AI[3], AB[3], spk[4], AI[4], AI[5], spk[5], AB[4], AI[6], spk[6], AI[7], AB[5], spk[7]]

var count = [{name: "Play", num:0},{name: "Stop", num:0},{name: "Pause", num:0},{name: "Unpause", num:0},{name: "Rewind", num:0},{name: "Rewind next", num:0},{name: "Forward", num:0},{name: "Forward next", num:0}, {name: "Restart", num:0}, {name: "Mute speech", num:0}, {name: "Unmute speech", num:0}, {name: "Mute AI", num:0}, {name: "Unmute AI", num:0}, {name: "Mute AB", num:0}, {name: "Unmute AB", num:0}, {name: "CsubC", num:0}];
var MaxNum = ARO.length

function AROgen(){
  var numstring = "num:"+num
  console.log(numstring)
  ARO[num].play()
  ARO[num].addEventListener('ended', function(){
    if (num<(MaxNum-1)){
      num++
      AROgen();
    }
  })
}    
function togglePlay(){
  if (playVal==true){
    count[1].num += 1;
    document.getElementById("play").value="Play"; 
    document.getElementById("pause").value="Unpause"; 
    playVal = false
    stopARO()
  } else {
    count[0].num += 1;
    document.getElementById("play").value="Stop"; 
    document.getElementById("pause").value="Pause"; 
    playVal = true
    playARO()
  }
}
function playARO(){
  setglobalvars();
  AROgen();
} 
function stopARO(){
    num=0;leg=0;
    console.log("Stop called")
    for (var i=0; i< ARO.length;i++){
      ARO[i].pause();  ARO[i].currentTime=0  
    }
}
function togglePause(){
  if (pauseVal==true){
      count[2].num += 1;
      document.getElementById("pause").value="Unpause"; 
      pauseVal = false
      pauseARO();
    } else {
      count[3].num += 1;
      document.getElementById("pause").value="Pause"; 
      pauseVal = true
      unpauseARO();
  }
}
function pauseARO(){
  if(ARO[num].currentTime!=0){ARO[num].pause()}
}
function unpauseARO(){
  ARO[num].play()
}
function restart(){
  count[8].name += 1;
  console.log("restart pressed")
  stopARO()
  playARO();
}
function forward(){
  count[6].num += 1;
  console.log("forward")
  var returnvals = findindex()
  var minDiff = returnvals[0]
  var index = returnvals[1]
  if(minDiff[index]==0 && (spkarray[index])!=(MaxNum-1)){
        num=spkarray[index+1]
    } else {num=spkarray[index]}
  AROgen()   
}
function forwardnext(){
  count[7].num += 1;

  console.log("forward")
  var returnvals = findindex()
  var minDiff = returnvals[0]
  var index = returnvals[1]
  if (minDiff[index]!=0){
    if (spkarray[index+1] < MaxNum-1){
      num = spkarray[index+1]
    } else {
      num = MaxNum-1
    }
  }
  else {
    if (spkarray[index+2] < MaxNum-1){
      num = spkarray[index+2]}
    else if (spkarray[index+1] < MaxNum-1){
      num = spkarray[index+1]}
    else {
      num = MaxNum-1
    }
  }
  var varia = "go to num: " + num
  console.log(varia)
  
  AROgen()  
}
function findindex(){
  var minDiff = [], tempnum = num, index
  stopARO()
  for (var i=0; i< spkarray.length; i++){
    minDiff[i] =  spkarray[i]-tempnum;
    if (minDiff[i]>=0){
      index = i
      var temp = "minDiff: " + minDiff + " . index: " + i + " .  spkarray: "+spkarray;
      console.log(temp)
      break
    }
  }
  setglobalvars()
  return [minDiff, index]
}
function rewindcur(){
  count[4].num += 1;

  console.log("rewound")
  var returnvals = findindex()
  var minDiff = returnvals[0]
  var index = returnvals[1]
  if (minDiff[index]==0){num=spkarray[index]}
  else {num=spkarray[index-1]}
  AROgen()   
}
function rewindprev(){
  count[5].num += 1;

  console.log("rewound to previous")
  var returnvals = findindex()
  var minDiff = returnvals[0]
  var index = returnvals[1]
  if (spkarray[index]==0) {
    num = 0;
  }
  else{
      if (minDiff[index]==0){
        num=spkarray[index-1]
        if (num<0){num=0}
      }
      else {
        num=spkarray[index-2]
        if (num<0){num=0}
      }
   }
  AROgen()   
}
function mutespeech(){
  if (spk[0].volume==0){ 
    count[10].num += 1;
    document.getElementById("muteSpeech").value="Mute speech";
    for (var i=0; i< spkarray.length; i++){
      spk[i].volume = 1;
    } 
  }
  else {
    for (var i=0; i< spk.length; i++){
      count[9].num += 1;
      document.getElementById("muteSpeech").value="Unmute speech";
      spk[i].volume = 0;
    } 
  }
}
function muteAIs(){
  if (AI[0].volume==0){
    count[12].num += 1;
    for (var i=0; i< AI.length; i++){
      document.getElementById("muteAI").value="Mute auditory icons";
      AI[i].volume = 1;
    } 
  }
  else {
    for (var i=0; i< AI.length; i++){
      count[11].num += 1;
      document.getElementById("muteAI").value="Unmute auditory icons";
      AI[i].volume = 0;
    } 
  }
}
function muteABs(){
  if (AB[0].volume){ 
    count[13].num += 1;
    for (var i=0; i<AB.length; i++){
      document.getElementById("muteAB").value="Unmute auditory brackets";
      AB[i].volume = 0;
    }
  } 
  else {
    for (var i=0; i<AB.length; i++){
      count[14].num += 1;
      document.getElementById("muteAB").value="Mute auditory brackets";
      AB[i].volume = 1;
    }
  }
  console.log("AB volume")
  console.log(AB[0].volume)
}
function postStuff(){
  console.log(count)
  $.ajax({
    url: "CsubC.php",
    method: "post",
    data: {count: JSON.stringify(count)},
    success: function(res){
      console.log(res)
      goingfwd()
    }
  })
}
function setglobalvars(){
  num = 0;
  playVal = true
  pauseVal= true

  spk =  [new Audio(address+"/spk1.mp3"), new Audio(address+"/spk2.mp3"), new Audio(address+"/spk3.mp3"), new Audio(address+"/spk4.mp3"), new Audio(address+"/spk5.mp3"), new Audio(address+"/spk6.mp3"), new Audio(address+"/spk7.mp3"), new Audio(address+"/spk8.mp3")]

  shop1poi = new Audio("./files/AIs/shops.mp3")
  cafe1poi = new Audio("./files/AIs/cafe.mp3")
  shop2poi = new Audio("./files/AIs/shops.mp3")
  cafe2poi = new Audio("./files/AIs/cafe.mp3")
  highwaypoi= new Audio("./files/AIs/road.wav")
  pedpoi    = new Audio("./files/AIs/pelican.mp3")
  river1poi = new Audio("./files/AIs/river.mp3")
  river2poi = new Audio("./files/AIs/river.mp3")
  AI = [shop1poi, cafe1poi, shop2poi, cafe2poi, highwaypoi, pedpoi, river1poi, river2poi] 
  AB = [new Audio("./files/EC/open.wav"), new Audio("./files/EC/open.wav"), new Audio("./files/EC/close.wav"), new Audio("./files/EC/close.wav"), new Audio("./files/EC/open.wav"), new Audio("./files/EC/close.wav")]
  spkarray = [0,1, 4, 9, 12, 14, 18, 21]

  ARO = [spk[0], spk[1], AB[0], AI[0], spk[2], AB[1], AI[1], AI[2], AB[2], spk[3], AI[3], AB[3], spk[4], AI[4], AI[5], spk[5], AB[4], AI[6], spk[6], AI[7], AB[5], spk[7]]  
  
  MaxNum = ARO.length
}