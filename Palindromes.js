// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// FIRST A.)
// function palindrome(str) {
//   if (str.split("").reverse().join("") === str) {
//     return true;
//   }
// }

//FIRST B.)
// function palindrome(str) {
//   return str.split("").reverse().join("") === str ? true : false;
// }

// SECOND
// function palindrome(str) {
//   let testCheck = "";
//   for (let character of str) {
//     testCheck = character + testCheck;
//   }
//   //   if (testCheck == str) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   return testCheck === str;
// }

// THIRD
function palindrome(str) {
  return str.split("").every((char, index) => {
    return char === str[str.length - index - 1];
  });
}

// console.log(palindrome("abbazabba"));

// FOURTH
// function palindrome(str) {
//     let checkArr = [];
//     str.split("").map((char, index) => {
//       if (char === str[str.length - index - 1]) {
//         checkArr.push(char);
//       }
//     });
//     return checkArr.join("") === str;
//   }

// console.log(palindrome("abbazabba"));
