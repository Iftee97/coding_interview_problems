// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// solution:
function reverse(str) {
  return str.split('').reverse().join('');
}

// solution-2:
function reverse1(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

// solution-3:
function reverse2(str) {
  str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

// solution-4:
function reverse2Refactored(str) {
  return str.split('').reduce((reversed, character) => (character + reversed), '');
}
