// Create a function that removes duplicates from given array

function removeDuplicates(arr) {
  arr = [...new Set(arr)];
  return arr;
}

console.log(removeDuplicates(["a", "b", "c", "c", "d", "d", "d", "e", "f"]));
