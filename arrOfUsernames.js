// Write a function which returns array of usernames.

function getUserNames(users) {
  const newArr = users.map((item) => item.username);
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
