// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// Examples:
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//FIRST SOLUTION

// function capitalize(str) {
//   const strArr = str.split(" ");
//   let changedStrArr = strArr.map((el) => {
//     let changedEl = el[0].toUpperCase() + el.slice(1, el.length);
//     return changedEl;
//   });

//   return changedStrArr.join(" ");
// }

//SECOND SOLUTION (basically a refined version of the first one, but this time with 'for..of' loop)

// function capitalize(str) {
//   const words = [];

//   for (let word of str.split(" ")) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(" ");
// }

//THIRD SOLUTION

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}
