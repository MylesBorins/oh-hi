import greetings from './greetings.js'

function random (range) {
  return Math.floor(Math.random() * range);
}

function greet () {
  return greetings[random(greetings.length)];
}

export {
  greet
}
