// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case

// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// solution 1:
function anagrams(stringA, stringB) {
  const stringAChars = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort();
  const stringBChars = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort();
  return stringAChars.join('') === stringBChars.join('');
}
// console.log(anagrams('rail safety', 'fairy tales'));


// solution 2:
function anagramsTwo(stringA, stringB) {
  const charMapA = makeCharMap(stringA);
  const charMapB = makeCharMap(stringB);
  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }
  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true;
}

function makeCharMap(string) {
  const charMap = {};
  for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

// console.log(anagramsTwo('rail safety', 'fairy tales'));
// console.log(anagramsTwo('RAIL! SAFETY!', 'fairy tales'));
// console.log(anagramsTwo('Hi there', 'Bye there'));


// solution 3:
function anagramsThree(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(string) {
  return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

console.log(anagramsThree('rail safety', 'fairy tales'));
console.log(anagramsThree('RAIL! SAFETY!', 'fairy tales'));
console.log(anagramsThree('Hi there', 'Bye there'));
