document.addEventListener("keydown", (event) => {
  const elements = document.querySelectorAll(`[data-key="${event.keyCode}"]`)
  elements[0].classList.add("playing")
  elements[1].currentTime = 0
  elements[1].play()
});

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', (e) => {
  if (e.propertyName !== 'border-top-color') return;
  key.classList.remove('playing')
}))
