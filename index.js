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
  console.log(greetings[random(greetings.length)]);
}

export {
  greet
}
