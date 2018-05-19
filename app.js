window.addEventListener("keydown", function (e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) { return; }
    audio.currentTime = 0; // if the sound is currently playing, start from the beginning if played again
    audio.play();
    key.classList.add("playing");

});

function removeTransition(e) {
    if(e.propertyName !== "transform") { return; }

    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));