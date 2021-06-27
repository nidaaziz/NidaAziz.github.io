var play, changeFreq, oscillator, changeType;

var oscProp = {
  type: 'sine',
  frequency: 400,
  playing: false
}

var audioContext = new AudioContext();
window.onload = function(){
  play = function(){
    if (oscProp.playing){
      oscillator.stop();
      oscProp.playing = false;
    } else {
      oscillator = audioContext.createOscillator();
      oscillator.type = oscProp.type;
      oscillator.frequency.setValueAtTime(oscProp.frequency, audioContext.currentTime);
      oscillator.connect(audioContext.destination);
      oscillator.start();
      oscProp.playing = true;
    }
  }

  changeFreq = function(){
    oscProp.frequency = document.getElementById("freqSlider").value*50;
    play();
    play();
  }
  
  changeType = function(){
    oscProp.type = document.querySelector("input[name = 'waveform']:checked").value;
    play();
    play();
  }

  function lopass(){
    oscillator.start();
    setTimeout(function (){
      oscillator.stop();
    }, 2000);
  }
}



function chooseABs(){ 
  // ABchoice = document.getElementsByClassName("AB");
  closeAB.play();
  console.log()
  // if (ABchoice == 'close' ){
  //   console.log('close');  
  //   closeAB.play();
  // } else if (button == 'open'){
  //   console.log('open');  
  //   openAB.play();
  // }
}


