//  Write a function which parses string integers. If it's not possible to
// parse, then add null
// parseInteger(["1", "2", "34"]); // [1, 2, 34];
// parseInteger(["1", "px", "2323"]); // [1, null, 2323];

function parseInteger(arr) {
  let integers = [];
  arr.map((item) => {
    if (isNaN(item)) {
      integers.push(null);
    } else {
      integers.push(Math.floor(Number(item)));
    }
  });
  return integers;
}

console.log(parseInteger(["1", "2", "34"]));
console.log(parseInteger(["1", "px", "2323"]));
