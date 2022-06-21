/*

directions:
given an integer, return that is the reverse order of numbers

examples:
reverseInt(15) === 51
reverseInt(981) === 189
reverseInt(500) === 5
reverseInt(-15) === -51
reverseInt(-90) === -9

*/

// solution 1:
function reverseInt(int) {
  const reversed = int.toString().split('').reverse().join('');
  return Number(reversed);
}
