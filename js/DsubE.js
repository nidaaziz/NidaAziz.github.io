var pass = false
var buttonup = new Audio("./files/AIs/buttonup.wav")

function goingfwd(){
  location.href = "http://webprojects.eecs.qmul.ac.uk/na328//interviewq.html";
  // <a href="http://webprojects.eecs.qmul.ac.uk/na328/CsubA.html"></a>
}
function audio5Fn(){
  if (pass==true){
    postStuff()
    pass = false
  }
  else{
    console.log("pass is false")
  }
  var fdbk5 = document.getElementsByName("q45[]")
  if(fdbk5[0].value=="") {
    console.log("Scenario 5 question 1 not answered ")
      }else{
        console.log(fdbk5[0].value)
   }
  if(fdbk5[1].value=="") {
    console.log("Scenario 5 question 2 not answered ")
      }else{
        console.log(fdbk5[1].value)
    }
  if(fdbk5[2].value=="") {
    console.log("Scenario 5 question 3 not answered ")
      }else{
        console.log(fdbk5[2].value)
    }
  if(fdbk5[3].value=="") {
    console.log("Scenario 5 question 4 not answered ")
      }else{
      console.log(fdbk5[3].value)
    }
  if(fdbk5[4].value=="") {
    console.log("Scenario 5 question 5 not answered ")
      }else{
        console.log(fdbk5[4].value)
    }
}

var rate = localStorage.getItem("rate")
if (rate!=1 || rate!=2 || rate!=3){rate=3}
var address = "./files/speech/scenario4/scenario4-e/rate"+rate

var num = 0;
var playVal = false
var pauseVal= true

  var highway1poi= new Audio("./files/AIs/road.mp3")
  var shops1poi  = new Audio("./files/AIs/shops.mp3")
  var petpoi     = new Audio("./files/AIs/pet.mp3")
  var churchpoi  = new Audio("./files/AIs/church.mp3")
  var cinema1poi = new Audio("./files/AIs/cinema.mp3")
  var cinema2poi = new Audio("./files/AIs/cinema.mp3")
  var shops2poi  = new Audio("./files/AIs/shops.mp3")
  var highway2poi= new Audio("./files/AIs/road.mp3")
  var buspoi   = new Audio("./files/AIs/bus.mp3")
  var trainpoi = new Audio("./files/AIs/train.mp3")

  var AI = [highway1poi, shops1poi, petpoi, churchpoi, cinema1poi, cinema2poi, shops2poi, highway2poi, buspoi, trainpoi]
  var AB = [, new Audio("./files/EC/open.wav"), , new Audio("./files/EC/open.wav"), new Audio("./files/EC/open.wav"), new Audio("./files/EC/close.wav"), new Audio("./files/EC/close.wav"), new Audio("./files/EC/close.wav")]
  var spkarray = [0, 1, 7, 11, 16, 19, 22]
  var spk = [new Audio(address+"/spk1.mp3"), new Audio(address+"/spk2.mp3"), new Audio(address+"/spk3.mp3"), new Audio(address+"/spk4.mp3"), new Audio(address+"/spk5.mp3"), new Audio(address+"/spk6.mp3"), new Audio(address+"/spk7.mp3")]

  var ARO = [spk[0], spk[1], AB[0], AI[0], AB[1], AI[1], AI[2], spk[2], AI[3], AB[2], AI[4], spk[4], AI[5], AB[3], AI[6], AB[4], spk[5], AI[7], AB[5], spk[6], AI[8], AI[9], spk[7]] 

  var count = [{name: "Play", num:0},{name: "Stop", num:0},{name: "Pause", num:0},{name: "Unpause", num:0},{name: "Rewind", num:0},{name: "Rewind next", num:0},{name: "Forward", num:0},{name: "Forward next", num:0}, {name: "Restart", num:0}, {name: "Mute speech", num:0}, {name: "Unmute speech", num:0}, {name: "Mute AI", num:0}, {name: "Unmute AI", num:0}, {name: "Mute AB", num:0}, {name: "Unmute AB", num:0},  {name: "DsubE", num:0}];

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
    url: "DsubE.php",
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

  highway1poi= new Audio("./files/AIs/road.mp3")
  shops1poi  = new Audio("./files/AIs/shops.mp3")
  petpoi     = new Audio("./files/AIs/pet.mp3")
  churchpoi  = new Audio("./files/AIs/church.mp3")
  cinema1poi = new Audio("./files/AIs/cinema.mp3")
  cinema2poi = new Audio("./files/AIs/cinema.mp3")
  shops2poi  = new Audio("./files/AIs/shops.mp3")
  highway2poi= new Audio("./files/AIs/road.mp3")
  buspoi   = new Audio("./files/AIs/bus.mp3")
  trainpoi = new Audio("./files/AIs/train.mp3")

  AI = [highway1poi, shops1poi, petpoi, churchpoi, cinema1poi, cinema2poi, shops2poi, highway2poi, buspoi, trainpoi]
  AB = [, new Audio("./files/EC/open.wav"), , new Audio("./files/EC/open.wav"), new Audio("./files/EC/open.wav"), new Audio("./files/EC/close.wav"), new Audio("./files/EC/close.wav"), new Audio("./files/EC/close.wav")]
  spkarray = [0, 1, 7, 11, 16, 19, 22]
  spk = [new Audio(address+"/spk1.mp3"), new Audio(address+"/spk2.mp3"), new Audio(address+"/spk3.mp3"), new Audio(address+"/spk4.mp3"), new Audio(address+"/spk5.mp3"), new Audio(address+"/spk6.mp3"), new Audio(address+"/spk7.mp3")]

  ARO = [spk[0], spk[1], AB[0], AI[0], AB[1], AI[1], AI[2], spk[2], AI[3], AB[2], AI[4], spk[4], AI[5], AB[3], AI[6], AB[4], spk[5], AI[7], AB[5], spk[6], AI[8], AI[9], spk[7]] 

  MaxNum = ARO.length
}