let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let caps_lock_key = document.querySelector('.caps_lock_key');

for (let i = 0; i < keys.length; i++) {
  keys[i].setAttribute('keyname', keys[i].innerText);
  keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase())
}

window.addEventListener('keydown', function(e) {
  for (let i = 0; i < keys.length; i++) {
    if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
      console.log(keys[i])
      keys[i].classList.add('active')
    }
  }
})

window.addEventListener('keyup', function(e) {
  for (let i = 0; i < keys.length; i++) {
    if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
      console.log(keys[i])
      keys[i].classList.remove('active')
      keys[i].classList.add('remove')
    }
    setTimeout(() => {
      keys[i].remove(remove)
    })
  }
})