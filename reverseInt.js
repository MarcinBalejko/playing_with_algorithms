// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples:
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// FIRST SOLUTION

function reverseInt(n) {
  let NumArr = n.toString().split("");
  let reversedNum;
  if (NumArr[0] === "-") {
    NumArr.shift();
    reversedNum = "-" + NumArr.reverse().join("");
  } else {
    reversedNum = NumArr.reverse().join("");
  }
  return Number(reversedNum);
}

// ^^^ return parseInt(reversedNum);  would also be ok

// SECOND SOLUTION

function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");

  if (n < 0) {
    return parseInt(reversed) * -1;
  }

  return parseInt(reversed);
}

module.exports = reverseInt;
