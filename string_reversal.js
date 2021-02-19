// Create a function that returns a new string with the reversed
// order of characters
// Examples:
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'

function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("Marcin"));
