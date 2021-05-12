// - Create a function that takes an array of numbers arr, a string str
// and return an array of numbers as per the following rules:
// - "Asc" returns a sorted array in ascending order.
// - "Desc" returns a sorted array in descending order.

function sortBy(arr, str) {
  if (str === "Desc") {
    console.log(arr.sort((a, b) => b - a));
  } else if (str === "Asc") {
    console.log(arr.sort((a, b) => a - b));
  } else {
    console.log(arr.sort((a, b) => a - b));
  }
}

sortBy([4, 3, 2, 1], "Asc"); // [1, 2, 3, 4]
sortBy([7, 8, 11, 66]); // [7, 8, 11, 66]
sortBy([7, 8, 11, 66], "Desc"); // [66, 11, 8, 7]
