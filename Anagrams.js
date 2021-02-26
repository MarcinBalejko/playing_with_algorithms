// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// Examples:
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//FIRST SOLUTION
// function anagrams(stringA, stringB) {
//   function restructureToCompare(str) {
//     return str.split(" ").join("").split("").sort().join("");
//   }
//   let compareA = restructureToCompare(stringA);
//   let compareB = restructureToCompare(stringB);

//   return compareA === compareB;
// }

//SECOND SOLUTION
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   } else {
//     for (let el in aCharMap) {
//       if (aCharMap[el] !== bCharMap[el]) {
//         return false;
//       }
//     }

//     return true;
//   }

//   function buildCharMap(str) {
//     const charMap = {};

//     // str.replace(/[^\w]/g, '')
//     //  ==> replace every non-alphanumeric character with ''
//     for (let char of str.replace(/[^\w]/g, "")) {
//       charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
//   }
// }

//THIRD SOLUTION
function anagrams(stringA, stringB) {
  function cleanString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
  }

  return cleanString(stringA) === cleanString(stringB);
}
