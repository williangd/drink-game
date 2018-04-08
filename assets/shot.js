const rollButton = document.getElementById('roll');
const options = document.getElementsByClassName('option');
let optionPicked;
const langButtons = document.querySelectorAll('.lang button');
const h1 = document.querySelector('h1');
const br = [
  'Beba',
  'Dose dupla',
  'Beba',
  'Jogue novamente',
  'Beba',
  'Passe a vez',
  'Beba',
  'Beba e jogue',
  'Beba',
  'Jogue novamente',
  'Beba',
  'Passe a vez'
];
const en = [
  'Have a shot',
  'Double shot',
  'Have a shot',
  'Play again',
  'Have a shot',
  'Miss a turn',
  'Have a shot',
  'Drink and play',
  'Have a shot',
  'Play again',
  'Have a shot',
  'Miss a turn'
];

langButtons[0].addEventListener('click', () => setLanguague('en'));

langButtons[1].addEventListener('click', () => setLanguague('br'));

setLanguague('en');

h1.addEventListener('click', () => roll());

rollButton.addEventListener('click', () => roll());

function roll() {
  rollButton.setAttribute('disabled', 'true');

  Array.from(options).forEach(opt => opt.removeAttribute('id', 'selected'));

  let times = random(6);
  const repeater = setInterval(function() {
    optionPicked = mark();
    setTimeout(dismark, 500, optionPicked);
    times--;
    if (times <= 0) {
      endRoll(repeater);
    }
  }, 1000);
}

function endRoll(repeater) {
  clearInterval(repeater);
  setTimeout(mark, 1000);
  setTimeout(function() {
    rollButton.removeAttribute('disabled');
  }, 1500);
}

function random(limit) {
  return Math.floor(Math.random() * limit);
}

function mark() {
  let num = random(13);
  num = num === 0 ? num : num - 1;
  optionPicked = options[num];
  optionPicked.setAttribute('id', 'selected');
  return optionPicked;
}

function dismark(optionPicked) {
  optionPicked.removeAttribute('id', 'selected');
}

function setLanguague(lang) {
  if (lang === 'br') {
    setText('Jogar', br);
    langButtons[0].classList.remove('lang-active');
    langButtons[1].classList.add('lang-active');
  } else {
    setText('Play', en);
    langButtons[1].classList.remove('lang-active');
    langButtons[0].classList.add('lang-active');
  }
}

function setText(buttonText, lang) {
  rollButton.textContent = buttonText;
  Array.from(options).forEach((opt, i) => (opt.textContent = lang[i]));
}
