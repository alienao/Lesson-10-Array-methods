// Write a function which returns array of lengths of user names

function getUserNames(users) {
  const newArr = users.map((item) => item.username.length);
  console.log(newArr);
}
getUserNames([
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
]);
