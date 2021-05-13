// Given an array, return the sum of numbers that are 18 or over.
// const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]
// 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347

function sumNumbersOver18(arr) {
  return arr.filter((item) => item >= 18).reduce((acc, item) => acc + item);
}

sumNumbersOver18([1, 100, 5, 6, 20, 30]);
