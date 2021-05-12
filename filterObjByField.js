// Write a function which filters object by field.
// filterByField(users, "isAstronaut"); // [{ username: "Yuri Gagarin",
// lang: "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG"
// }]
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

function filterByField(arr, field) {
  let usersByField = arr.filter((item) => item[field]);
  return usersByField;
}

console.log(filterByField(users, "isAstronaut"));
