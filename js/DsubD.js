var pass = false
var buttonup = new Audio("./files/AIs/buttonup.wav")

function goingfwd(){
  location.href = "http://webprojects.eecs.qmul.ac.uk/na328//DsubE.html";
  // <a href="http://webprojects.eecs.qmul.ac.uk/na328/CsubA.html"></a>
}
function audio4Fn(){
  if (pass==true){
    postStuff()
    pass = false
  }
  else{
    console.log("pass is false")
  }
  var fdbk4 = document.getElementsByName("q44[]")
  if(fdbk4[0].value=="") {
    console.log("Scenario 4 question 1 not answered ")
      }else{
        console.log(fdbk4[0].value)
   }
  if(fdbk4[1].value=="") {
    console.log("Scenario 4 question 2 not answered ")
      }else{
        console.log(fdbk4[1].value)
    }
  if(fdbk4[2].value=="") {
    console.log("Scenario 4 question 3 not answered ")
      }else{
        console.log(fdbk4[2].value)
    }
  if(fdbk4[3].value=="") {
    console.log("Scenario 4 question 4 not answered ")
      }else{
      console.log(fdbk4[3].value)
    }
  if(fdbk4[4].value=="") {
    console.log("Scenario 4 question 5 not answered ")
      }else{
        console.log(fdbk4[4].value)
    }
}

var rate = localStorage.getItem("rate")
if (rate!=1 || rate!=2 || rate!=3){rate=3}
var address = "./files/speech/scenario4/scenario4-d/rate"+rate

var num = 0;
var playVal = false
var pauseVal= true

var park1poi  = new Audio("./files/AIs/park.mp3")
var park2poi  = new Audio("./files/AIs/park.mp3")
var churchpoi = new Audio("./files/AIs/church.mp3")
var shop1poi  = new Audio("./files/AIs/shops.mp3")
var atmpoi    = new Audio("./files/AIs/atm.mp3")
var shop2poi  = new Audio("./files/AIs/shops.mp3")
var hosp1poi  = new Audio("./files/AIs/hospital.mp3")
var hosp2poi  = new Audio("./files/AIs/hospital.mp3")
var schoolpoi = new Audio("./files/AIs/school.mp3")

var AI = [park1poi, park2poi, churchpoi, shop1poi, atmpoi, shop2poi, hosp1poi, hosp2poi, schoolpoi]
var AB = [new Audio("./files/EC/open.wav"), new Audio("./files/EC/close.wav"), new Audio("./files/EC/open.wav"), new Audio("./files/EC/close.wav"), new Audio("./files/EC/open.wav"), new Audio("./files/EC/close.wav")]
var spkarray = [0, 1, 4, 7, 9, 12, 18, 23, 27]
var spk = [new Audio(address+"/spk1.mp3"), new Audio(address+"/spk2.mp3"), new Audio(address+"/spk3.mp3"), new Audio(address+"/spk4.mp3"), new Audio(address+"/spk5.mp3"), new Audio(address+"/spk6.mp3"), new Audio(address+"/spk7.mp3"), new Audio(address+"/spk8.mp3")]

var ARO = [spk[0], spk[1], AB[0], AI[0], spk[2], AI[1], AB[1], spk[3], AI[2], spk[4], AB[2], AI[3], spk[5], AB[3], AI[4], AI[5], AI[6], AB[4], spk[6], AI[7], AB[5], AB[6], AI[8], spk[7], AI[9], AB[7], AI[10], spk[8]] 

var count = [{name: "Play", num:0},{name: "Stop", num:0},{name: "Pause", num:0},{name: "Unpause", num:0},{name: "Rewind", num:0},{name: "Rewind next", num:0},{name: "Forward", num:0},{name: "Forward next", num:0}, {name: "Restart", num:0}, {name: "Mute speech", num:0}, {name: "Unmute speech", num:0}, {name: "Mute AI", num:0}, {name: "Unmute AI", num:0}, {name: "Mute AB", num:0}, {name: "Unmute AB", num:0},  {name: "DsubD", num:0}];

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
  console.log(close1AB.volume)
}
function postStuff(){
  console.log(count)
  $.ajax({
    url: "DsubD.php",
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

  park1poi  = new Audio("./files/AIs/park.mp3") 
  park2poi  = new Audio("./files/AIs/park.mp3")
  churchpoi = new Audio("./files/AIs/church.mp3")
  shop1poi  = new Audio("./files/AIs/shops.mp3")
  atmpoi    = new Audio("./files/AIs/atm.mp3")
  shop2poi  = new Audio("./files/AIs/shops.mp3")
  hosp1poi  = new Audio("./files/AIs/hospital.mp3")
  hosp2poi  = new Audio("./files/AIs/hospital.mp3")
  schoolpoi = new Audio("./files/AIs/school.mp3")

  AI = [park1poi, park2poi, churchpoi, shop1poi, atmpoi, shop2poi, hosp1poi, hosp2poi, schoolpoi]
  AB = [new Audio("./files/EC/open.wav"), new Audio("./files/EC/close.wav"), new Audio("./files/EC/open.wav"), new Audio("./files/EC/close.wav"), new Audio("./files/EC/open.wav"), new Audio("./files/EC/close.wav")]
  spkarray = [0, 1, 4, 7, 9, 12, 18, 23, 27]
  spk = [new Audio(address+"/spk1.mp3"), new Audio(address+"/spk2.mp3"), new Audio(address+"/spk3.mp3"), new Audio(address+"/spk4.mp3"), new Audio(address+"/spk5.mp3"), new Audio(address+"/spk6.mp3"), new Audio(address+"/spk7.mp3"), new Audio(address+"/spk8.mp3")]

  ARO = [spk[0], spk[1], AB[0], AI[0], spk[2], AI[1], AB[1], spk[3], AI[2], spk[4], AB[2], AI[3], spk[5], AB[3], AI[4], AI[5], AI[6], AB[4], spk[6], AI[7], AB[5], AB[6], AI[8], spk[7], AI[9], AB[7], AI[10], spk[8]] 

  MaxNum = ARO.length
}