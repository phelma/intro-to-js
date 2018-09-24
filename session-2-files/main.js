let audioA = document.getElementById('audio-A');
let audioS = document.getElementById('audio-S');
let audioD = document.getElementById('audio-D');

let keyA = document.getElementById('key-A');

let playA = () => {
  audioA.currentTime = 0;
  audioA.play();
};

let playS = () => {
  audioS.currentTime = 0;
  audioS.play();
};

let playD = () => {
  audioD.currentTime = 0;
  audioD.play();
};

let playSound = event => {
  // console.log(event);
  let keyCode = event.keyCode;

  if (keyCode === 65) {
    playA();
    keyA.classList.add('playing');
  } else if (keyCode === 83) {
    playS();
  } else if (keyCode === 68) {
    playD();
  }

  // const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // if (!audio) return;
  // audio.currentTime = 0;
  // audio.play();
};

const removeTransition = e => {
  e.target.classList.remove('playing');
};

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
