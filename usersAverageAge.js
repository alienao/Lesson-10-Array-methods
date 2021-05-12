//  Write a function which calculates average age of users.

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

function getAverageAge(arr) {
  let age = arr.reduce((sum, item) => sum + item.age, 0);
  return age / arr.length;
}

console.log(getAverageAge(users)); // 55
