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
console.log(reverse('elppa'));

// solution-2:
function reverse1(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
console.log(reverse1('elppa'));
