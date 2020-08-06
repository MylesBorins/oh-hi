const greetings = [
  'howdy',
  'hi',
  'sup',
  'shalom',
  'yoooooooooo'
];

function random (range) {
  return Math.floor(Math.random() * range);
}

function greet () {
  return greetings[random(greetings.length)];
}

export {
  greet
}
