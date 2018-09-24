# Intro to JS, Session 2

* We are going to make a drum machine
* Finished page https://js-drums.surge.sh
* Get some more sounds https://freewavesamples.com/
* https://keycode.info/
* Get the starter files and get set up in brackets
* Extras
  * More sounds
  * More keys



```js
let audioA = document.getElementById('audio-A');

let playSound = () => {
  audioA.currentTime = 0;
  audioA.play();
}

window.addEventListener('keydown', playSound);
```

```js
let playA = () => {
  audioA.currentTime = 0;
  audioA.play();
};

let playSound = () => {
  if (keyCode === 65) {
    playA();
  }
}
```

```js
let playSound = () => {
  if (keyCode === 65) {
    playA();
  }
}
```

```js

let keyA = document.getElementById('key-A');
if (keyCode === 65) {
  playA();
  keyA.classList.add('playing');
}

const removeTransition = e => {
  e.target.classList.remove('playing');
};

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
```