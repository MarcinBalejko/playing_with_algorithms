// The Fibonacci numbers are the numbers in the following integer sequence.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..
// In mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation

//Write a function int fib(int n) that returns Fn. For example, if n = 0,
// then fib() should return 0. If n = 1,
// then it should return 1. For n > 1, it should return Fn-1 + Fn-2

const fibonacci = function (num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

console.log(fibonacci(9));
