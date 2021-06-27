var pass = false
var buttonup = new Audio("./files/AIs/buttonup.wav")

function goingfwd(){
  location.href = "http://webprojects.eecs.qmul.ac.uk/na328/DsubD.html";
  // <a href="http://webprojects.eecs.qmul.ac.uk/na328/CsubA.html"></a>
}
function audio3Fn(){
  if (pass==true){
    postStuff()
    pass = false
  }
  else{
    console.log("pass is false")
  }
  var fdbk3 = document.getElementsByName("q43[]")
  if(fdbk3[0].value=="") {
    console.log("Scenario 3 question 1 not answered ")
      }else{
        console.log(fdbk3[0].value)
   }
  if(fdbk3[1].value=="") {
    console.log("Scenario 3 question 2 not answered ")
      }else{
        console.log(fdbk3[1].value)
    }
  if(fdbk3[2].value=="") {
    console.log("Scenario 3 question 3 not answered ")
      }else{
        console.log(fdbk3[2].value)
    }
  if(fdbk3[3].value=="") {
    console.log("Scenario 3 question 4 not answered ")
      }else{
      console.log(fdbk3[3].value)
    }
  if(fdbk3[4].value=="") {
    console.log("Scenario 3 question 5 not answered ")
      }else{
        console.log(fdbk3[4].value)
    }
}

var rate = localStorage.getItem("rate");
var address = "./files/speech/scenario4/scenario4-c/rate"+rate

var num = 0;
var playVal = false
var pauseVal= true

var open     = new Audio("./files/EC/open.wav");
var close    = new Audio("./files/EC/close.wav") ;
var openAB   = new Audio("./files/EC/open.wav");
var closeAB  = new Audio("./files/EC/close.wav") ;
var open1AB  = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fopen.wav?v=1602289428540");
var close1AB = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fclose.wav?v=1602289427463") ;
var open2AB  = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fopen.wav?v=1602289428540");
var close2AB = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fclose.wav?v=1602289427463") ;

var AB = [openAB, closeAB, open1AB, close1AB, open2AB, close2AB]

var PoIs = [new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fchurch.mp3?v=1602289053133"),
             new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fpark.mp3?v=1602289053709"),
             new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Funiversity.wav?v=1602289055693"),
             new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Froad.wav?v=1602289057355"),
             new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fpelican.mp3?v=1602289054672"), 
             new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fbus.wav?v=1602289054719"),
             new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fcafe.mp3?v=1602289052094"),
             new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Ftrain.mp3?v=1602289053284"),
             new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fshops.mp3?v=1602289052562"),
             new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Flibrary.wav?v=1602289054907"),
             new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fhospital.wav?v=1602289056354"),
             new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fopen.wav?v=1602289428540"),
             new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fopen.wav?v=1602289428540"),
             new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fopen.wav?v=1602289428540")
            ]
var churchpoi     = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fchurch.mp3?v=1602289053133");
var parkpoi       = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fpark.mp3?v=1602289053709");
var universitypoi = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Funiversity.wav?v=1602289055693");
var roadpoi       = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Froad.wav?v=1602289057355");
var pedpoi        = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fpelican.mp3?v=1602289054672");
var buspoi        = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fbus.wav?v=1602289054719");
var cafepoi       = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fcafe.mp3?v=1602289052094");
var trainpoi      = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Ftrain.mp3?v=1602289053284");
var shopspoi      = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fshops.mp3?v=1602289052562");
var librarypoi    = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Flibrary.wav?v=1602289054907");
var hospitalpoi   = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fhospital.wav?v=1602289056354");
var superpoi      = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fopen.wav?v=1602289428540");
var atmpoi        = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fopen.wav?v=1602289428540");
var highwaypoi    = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fopen.wav?v=1602289428540");
var church2poi = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fchurch.mp3?v=1602289053133");
var shops2poi  = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fshops.mp3?v=1602289052562");
var cafe2poi   = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fcafe.mp3?v=1602289052094");

var AI = [churchpoi, parkpoi, universitypoi, roadpoi, pedpoi, buspoi, cafepoi, trainpoi, shopspoi, librarypoi, hospitalpoi, superpoi, atmpoi, highwaypoi, church2poi, shops2poi, cafe2poi]
   
var spkarray = [0,1,3,5,10,16,20,23]
var count = [{name: "Play", num:0},{name: "Stop", num:0},{name: "Pause", num:0},{name: "Unpause", num:0},{name: "Rewind", num:0},{name: "Rewind next", num:0},{name: "Forward", num:0},{name: "Forward next", num:0}, {name: "Restart", num:0}, {name: "Mute speech", num:0}, {name: "Unmute speech", num:0}, {name: "Mute AI", num:0}, {name: "Unmute AI", num:0}, {name: "Mute AB", num:0}, {name: "Unmute AB", num:0},  {name: "DsubC", num:0}];


var spk = [new Audio(address+"/spk1.mp3"), new Audio(address+"/spk2.mp3"), new Audio(address+"/spk3.mp3"), new Audio(address+"/spk4.mp3"), new Audio(address+"/spk5.mp3"), new Audio(address+"/spk6.mp3"), new Audio(address+"/spk7.mp3"), new Audio(address+"/spk8.mp3")]

var ARO = [spk[0], spk[1], trainpoi ,spk[2], buspoi, spk[3], openAB, shopspoi, open1AB, 
cafepoi, spk[4], shops2poi, closeAB, atmpoi,  cafe2poi, close1AB, spk[5], pedpoi, open2AB, churchpoi, spk[6], church2poi, close2AB, spk[7]] 
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
    url: "DsubC.php",
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

  open  = new Audio("./files/EC/open.wav");
  close = new Audio("./files/EC/close.wav") ;
  openAB  = new Audio("./files/EC/open.wav");
  closeAB = new Audio("./files/EC/close.wav") ;
  open1AB  = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fopen.wav?v=1602289428540");
  close1AB = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fclose.wav?v=1602289427463") ;
  open2AB  = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fopen.wav?v=1602289428540");
  close2AB = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fclose.wav?v=1602289427463") ;

  AB = [openAB, closeAB, open1AB, close1AB, open2AB, close2AB]

 spk = [new Audio(address+"/spk1.mp3"), 
 new Audio(address+"/spk2.mp3"), new Audio(address+"/spk3.mp3"), new Audio(address+"/spk4.mp3"), new Audio(address+"/spk5.mp3"), new Audio(address+"/spk6.mp3"), new Audio(address+"/spk7.mp3"), new Audio(address+"/spk8.mp3")]
 churchpoi     = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fchurch.mp3?v=1602289053133");
 parkpoi       = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fpark.mp3?v=1602289053709");
 universitypoi = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Funiversity.wav?v=1602289055693");
 roadpoi       = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Froad.wav?v=1602289057355");
 pedpoi        = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fpelican.mp3?v=1602289054672");
 buspoi        = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fbus.wav?v=1602289054719");
 trainpoi      = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Ftrain.mp3?v=1602289053284");
 shopspoi      = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fshops.mp3?v=1602289052562");
 cafepoi       = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fcafe.mp3?v=1602289052094");
 librarypoi    = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Flibrary.wav?v=1602289054907");
 hospitalpoi   = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fhospital.wav?v=1602289056354");
 superpoi      = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fopen.wav?v=1602289428540");
 atmpoi        = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fopen.wav?v=1602289428540");
 highwaypoi    = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fopen.wav?v=1602289428540");
 church2poi = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fchurch.mp3?v=1602289053133");
 shops2poi  = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fshops.mp3?v=1602289052562");
 cafe2poi   = new Audio("https://cdn.glitch.com/f7859e96-3e9b-4182-85cf-965822bbf08c%2Fcafe.mp3?v=1602289052094");

  AI = [churchpoi, parkpoi, universitypoi, roadpoi, pedpoi, buspoi, trainpoi, shopspoi, cafepoi, librarypoi, hospitalpoi, superpoi, atmpoi, highwaypoi, church2poi, shops2poi, cafe2poi]
  ARO = [spk[0], spk[1], trainpoi ,spk[2], buspoi, spk[3], openAB, shopspoi, open1AB, 
  cafepoi, spk[4], shops2poi, closeAB, atmpoi,  cafe2poi, close1AB, spk[5], pedpoi, open2AB, churchpoi, spk[6], church2poi, close2AB, spk[7]] 
  spkarray = [0,1,3,5,10,16,20,23]
  MaxNum = ARO.length
}