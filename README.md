# Array Methods

* Concatenate the two arrays

```
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
const arr3; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

* How to take arguments in sum function?

```
function sum() {
return args.reduce((sum, current) => {
return sum + current;
});
}
sum(1, 2); // prints 3
sum(1, 2, 3); // prints 6
```

* How to pass arguments in sum function?

```
function sum(x, y, z) {
return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum()); // prints 6
```

* Swapping Values using the Destructuring Assignment

```
let a = 3;
let b = 6;
console.log(a); //6
console.log(b); //3
```

## SORT

*Your function must use sort method*

```
- Create a function that takes an array of numbers arr, a string str
and return an array of numbers as per the following rules:
- "Asc" returns a sorted array in ascending order.
- "Desc" returns a sorted array in descending order.
``` javascript
sortBy([4, 3, 2, 1], "Asc" ) // [1, 2, 3, 4]
sortBy([7, 8, 11, 66]) // [7, 8, 11, 66]
sortBy([7, 8, 11, 66], "Desc") // [66, 11, 8, 7]
```


## Map

*Your function must use map method*

- Write a function which returns array of usernames.
``` javascript
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
getUserNames(users); // ['Yuri Gagarin', 'Nil Armstrong']
```
- Write a function which returns array of lengths of user names

``` javascript
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
getUsernameLengths(users); // [12, 13]
```


- Write a function which parses string integers. If it's not possible to
parse, then add null

``` javascript
arseInteger(["1", "2", "34"]); // [1, 2, 34];
parseInteger(["1", "px", "2323"]); // [1, null, 2323];
```

## Filter

*Your functions must use filter method*

- Given an array, return a new array that only includes the numbers.
``` javascript
const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null,
166, NaN]
// [1, 2, 55, 166]
```
- Write a function which remove users with language equals to 'ru'.
``` javascript
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
filterUsers(users); // [{ username: "Nil Armstrong, lang: "ENG" }]
```
- Write a function which filters object by field.
``` javascript
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
filterByField(users, "isAstronaut"); // [{ username: "Yuri Gagarin",
lang: "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG"
}]
```

## Reduce
*Your function must use reduce*

- Given an array, return the sum of numbers that are 18 or over.
``` javascript
const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]
// 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347
```
- Write a function which calculates average age of users.
``` javascript
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
getAverageAge(users); // 55
```