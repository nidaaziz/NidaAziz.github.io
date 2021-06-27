function goingto(){
  postStuff()
  location.href = "http://webprojects.eecs.qmul.ac.uk/na328/scenario2-a.html";
}

var rate = localStorage.getItem("rate")
if (rate!=1 || rate!=2 || rate!=3){rate=3}
var address = "./files/speech/scenario2/scenario2-a/BsubA1/rate"+rate

var speech, spk1, spk2, spk3, num, leg, speechVol, AIVol, ABVol, playVal, pauseVal, AB, AI, PoI, speech, count
var MaxNum = 5
var MaxLeg = 5;

var park1poi   = new Audio("./files/AIs/park.mp3");
var shops1poi  = new Audio("./files/AIs/shops.mp3");
var park2poi   = new Audio("./files/AIs/park.mp3");
var shops2poi  = new Audio("./files/AIs/shops.mp3");
var cafepoi    = new Audio("./files/AIs/cafe.mp3");
var schoolpoi  = new Audio("./files/AIs/school.mp3");
var atmpoi     = new Audio("./files/AIs/atm.mp3");

var open1AB    = new Audio("./files/EC/open.wav");
var close1AB   = new Audio("./files/EC/close.wav");
var open2AB    = new Audio("./files/EC/open.wav");
var close2AB   = new Audio("./files/EC/close.wav");

var buttonup   = new Audio("./files/buttonaudio.wav")
var buttondown = new Audio("./files/buttondown.wav")

var num = 0;
var leg = 0;
var speechVol = 1
var AIVol = 1
var ABVol = 1
var playVal = true
var pauseVal= true

var AB = [open1AB, close1AB, open2AB, close2AB]
var AI = [park1poi, schoolpoi, cafepoi, park2poi, shops1poi, atmpoi, shops2poi];
var PoI = [ open1AB, park1poi, schoolpoi, cafepoi, park2poi, close1AB, open2AB, shops1poi, atmpoi, shops2poi, close2AB];

var speech = [new Audio(address+"/spk1.mp3"), new Audio(address+"/spk2.mp3"), 
       new Audio(address+"/spk3.mp3"), new Audio(address+"/spk4.mp3"),
       new Audio(address+"/spk5.mp3"), new Audio(address+"/spk6.mp3")]    

var count =[{name:"bsubA1",num:0},{name:"playCount",num:0},{name:"stopCount",num:0},{name:"pauseCount", num:0},{name:"unpauseCount", num:0},{name:"rew curr Count", num:0},{name:"rew prev Count", num:0},{name:"fwd Count", num:0},{name:"fwd next Count", num:0},{name:"restartCount", num:0},{name:"mutespeech", num:0},{name:"unmutespeech", num:0},{name:"muteAI", num:0},{name:"unmuteAI", num:0},{name:"muteAB", num:0},{name:"unmuteAB", num:0}]

function AROgen(){
    var numstring = "num:"+num
    console.log(numstring)
    speech[num].play()
    console.log(speech[num].currentTime)
    speech[num].addEventListener('ended', function(){
      var speechVar = "speech: " + num + " finished"
      console.log(speechVar)
      if (leg<MaxLeg){
        PoIs()
      }})
}    

function PoIs(){
  var legVal = "leg:"+leg
  console.log(legVal)
    if (leg == 0){
      leg++;num++;
      AROgen()
  } else if (leg == 1){
      console.log("{")
      PoI[0].play();
      PoI[0].addEventListener('ended', function(){
        console.log("park")
        PoI[1].play();
        PoI[1].addEventListener('ended', function(){
          console.log("school")
          PoI[2].play();
          PoI[2].addEventListener('ended', function(){
            console.log("back to ARO from leg 1")
            leg++;num++
            AROgen()
          })
        })
      })
  } else if (leg == 2){
    console.log("cafe")
    PoI[3].play();
    PoI[3].addEventListener('ended', function(){
      console.log("park")
      PoI[4].play();
      PoI[4].addEventListener('ended', function(){
        console.log("}")
        PoI[5].play();
        PoI[5].addEventListener('ended', function(){
          console.log("Back to ARO from leg 2")
          leg++;num++;
          AROgen()
        })
      })
    })
  } else if (leg == 3){
      console.log("{")
      PoI[6].play();
      PoI[6].addEventListener('ended', function(){
        console.log("shops")
        PoI[7].play();
        PoI[7].addEventListener('ended', function(){
          leg++;num++
          AROgen()
      })
    })
  } else if (leg == 4){
      console.log("atm")
      PoI[8].play();
      PoI[8].addEventListener('ended', function(){
        console.log("shops")
        PoI[9].play();
        PoI[9].addEventListener('ended', function(){
          console.log("}")
          PoI[10].play();
          PoI[10].addEventListener('ended', function(){
            leg++, num++
            AROgen()
          })
        })
      })
  } else if (leg == MaxLeg){
          stopARO()
  }
}
function mutespeech(){
  if (speech[0].volume==0){
    count[10].num += 1; 
    document.getElementById("muteSpeech").value="Mute speech";
    for (var i=0; i< speech.length; i++){
      speech[i].volume = 1;
    } 
  }
  else {
    count[9].num += 1;
    for (var i=0; i< speech.length; i++){
      document.getElementById("muteSpeech").value="Unmute speech";
      speech[i].volume = 0;
    } 
  }
  var speechVolVar = "speechVol: "+speechVol
  console.log(speechVolVar)
}
function muteAIs(){
  count[12].num += 1;
  if (park1poi.volume==0){ 
    for (var i=0; i< AI.length; i++){
      document.getElementById("muteAI").value="Mute auditory icons";
      AI[i].volume = 1;
    } 
  }
  else {
    count[11].num += 1;
    for (var i=0; i< AI.length; i++){
      document.getElementById("muteAI").value="Unmute auditory icons";
      AI[i].volume = 0;
    } 
  }
  var AIVolVar = "AIVol: "+AIVol
  console.log(AIVolVar)
}
function muteABs(){
  if (AB[0].volume){ 
    count[13].num += 1;
    for (var i=0; i<AB.length; i++){
      document.getElementById("muteAB").value="Mute auditory brackets";
      AB[i].volume = 0;
    }
  } 
  else {
    count[14].num += 1;
    for (var i=0; i<AB.length; i++){
      document.getElementById("muteAB").value="Unmute auditory brackets";
      AB[i].volume = 1;
    }
  }
  console.log("AB volume")
  console.log(close1AB.volume)
}
function rewindcur(){
  count[4].num += 1;
  var tempnum=num, templeg=leg
  if(num>0){
    console.log("rewound")
    pauseaudio()
    
    if (speech[num].playing){
        tempnum = num-1; 
        templeg = leg-1
    }
    if (num == MaxNum){
      tempnum = MaxNum-1;
      templeg = leg-1
    }
    setglobalvars()
    num=tempnum;leg=templeg;
    AROgen();
  } else{
      num=0
      AROgen()   
  }
}
function rewindprev(){
  count[5].num += 1;
  var tempnum=num, templeg=leg
  if(num>0){
    console.log("rewound to previous")
    pauseaudio()
    
    tempnum = num-1; 
    templeg = leg-1
    
    if (num == MaxNum){
      tempnum = MaxNum-1;
      templeg = leg-1
    }
    setglobalvars()
    num=tempnum;leg=templeg;
    AROgen();
  } else{
      num=0
      AROgen()
    
  }
}
function forward(){
  count[6].num += 1;
  var tempnum, templeg
  if(num < MaxNum){
    console.log("forward")
    pauseaudio()
    tempnum = num+1; 
    templeg = leg+1
    setglobalvars()
    num=tempnum;leg=templeg;
    AROgen();
  }
  else{
    num=MaxNum
    AROgen()
    console.log("num is greater than Max")  
  }
}
function forwardnext(){
  count[7].num += 1;
  var tempnum, templeg
  if(num < MaxNum){
    console.log("forward")
    pauseaudio()
    if ((num+2)<=MaxNum){
      tempnum = num+2; 
      templeg = leg+2
    } else if ((num+1)<=MaxNum){
      tempnum = num+1 
      templeg = leg+1
    }
    setglobalvars()
    num=tempnum;leg=templeg;
    AROgen();
  }
  else{
    num=MaxNum
    AROgen()
    console.log("num is greater than Max")  
  }
}
function restart(){
  count[8].num += 1;
  console.log("restart pressed")
  stopARO()
  playARO();
}
function togglePlay(){
  if (playVal==true){
    document.getElementById("play").value="Play"; 
    document.getElementById("pause").value="Unpause"; 
    playVal = false
    stopARO();
  } else {
    document.getElementById("play").value="Stop"; 
    document.getElementById("pause").value="Pause"; 
    playVal = true
    playARO()
  }
}
function playARO(){
  count[0].num += 1;
  setglobalvars();
  AROgen();
} 
function stopARO(){
    count[1].num += 1;
    num=0;leg=0;
    console.log("Stop called")
    for (var i=0; i< PoI.length;i++){
      if (PoI[i].currentTime!=0)   {PoI[i].pause();  PoI[i].currentTime=0  }
    }
    for (var i=0; i< speech.length;i++){
      if (speech[i].currentTime!=0)   {speech[i].pause();  speech[i].currentTime=0  }
    }
}
function togglePause(){
    if (pauseVal==true){
      document.getElementById("pause").value="Unpause"; 
      pauseVal = false
      pauseaudio();
    } else {
      document.getElementById("pause").value="Pause"; 
      pauseVal = true
      unpauseaudio()
    }
}
function pauseaudio(){
    console.log("Pause...")
    count[2].num += 1;
    for (var i=0; i< PoI.length;i++){
      if (PoI[i].played)   {PoI[i].pause();}
    }
    for (var i=0; i< speech.length;i++){
      if (speech[i].played){speech[i].pause();}
    }
}   
function unpauseaudio(){
  console.log("Play again...")
  count[3].num += 1;
  for (var i=0; i< PoI.length;i++){
    if (PoI[i].currentTime!=0 && PoI[i].currentTime!=PoI[i].duration)   {
      console.log(PoI[i].currentTime)
      console.log(PoI[i].duration)
      PoI[i].play();
    }
  }
  for (var i=0; i< speech.length;i++){
    if (speech[i].currentTime!=0 && speech[i].currentTime!=speech[i].duration){
      console.log(speech[i].currentTime)
      console.log(speech[i].duration)
      speech[i].play();
    }
  }
}

function postStuff(){
  console.log(count)
  $.ajax({
    url: "BsubA1.php",
    method: "post",
    data: {count: JSON.stringify(count)},
    success: function(res){
      console.log(res)
    }
  })
}
function setglobalvars(){
    park1poi   = new Audio("./files/AIs/park.mp3");
    shops1poi  = new Audio("./files/AIs/shops.mp3");
    park2poi   = new Audio("./files/AIs/park.mp3");
    shops2poi  = new Audio("./files/AIs/shops.mp3");
    cafepoi    = new Audio("./files/AIs/cafe.mp3");
    schoolpoi  = new Audio("./files/AIs/school.mp3");
    atmpoi     = new Audio("./files/AIs/atm.mp3");
  
    open1AB    = new Audio("./files/EC/open.wav");
    close1AB   = new Audio("./files/EC/close.wav");
    open2AB    = new Audio("./files/EC/open.wav");
    close2AB   = new Audio("./files/EC/close.wav");
  
    buttonup   = new Audio("./files/buttonaudio.wav")
    buttondown = new Audio("./files/buttondown.wav")
    
    num = 0;
    leg = 0;
    speechVol = 1
    AIVol = 1
    ABVol = 1
    playVal = true
    pauseVal= true
    
    AB = [open1AB, close1AB, open2AB, close2AB]
    AI = [park1poi, schoolpoi, cafepoi, park2poi, shops1poi, atmpoi, shops2poi];
    PoI = [ open1AB, park1poi, schoolpoi, cafepoi, park2poi, close1AB, open2AB, shops1poi, atmpoi, shops2poi, close2AB];
    
    speech = [new Audio(address+"/spk1.mp3"), new Audio(address+"/spk2.mp3"), 
           new Audio(address+"/spk3.mp3"), new Audio(address+"/spk4.mp3"),
           new Audio(address+"/spk5.mp3"), new Audio(address+"/spk6.mp3")]    
    
    inputForm = document.querySelector('form');
}