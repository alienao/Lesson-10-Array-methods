// Write a function which remove users with language equals to 'ru'.
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function filterUsers(arr, language) {
  let lang = language.toLowerCase();
  let removed = arr.filter((item) => item.lang.toLowerCase() !== lang);
  return removed;
}

console.log(filterUsers(users, "ru"));
