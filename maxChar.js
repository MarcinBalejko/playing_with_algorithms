// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// FIRST SOLUTION

// function maxChar(str) {
//   let charObject = {};
//   for (let char of str) {
//     if (charObject[char] === undefined) {
//       charObject[char] = 1;
//     } else {
//       charObject[char] = charObject[char]++;
//     }
//   }
//   let keyValArr = Object.entries(charObject);
//   let onlyValues = keyValArr.map((element) => element[1]);
//   const maxVal = Math.max(...onlyValues);
//   return Object.keys(charObject).find((key) => charObject[key] === maxVal);
// }

// SECOND SOLUTION

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char] = charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
