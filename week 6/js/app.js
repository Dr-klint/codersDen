//Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}

let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for (i = 10; i >= 0; i--) {
  console.log(i);
}

let l = 10;
while (l >= 0) {
  console.log(l);
  l--;
}

let m = 10;
do {
  console.log(m);
  m--;
} while (m >= 0);

//Iterate 0 to n using for loop
let printNumbers = (n) => {
  if (n > 0) {
    for (let i = 0; i <= n; i++) {
      console.log(i);
    }
  } else if (n < 0) {
    for (let i = 0; i >= n; i--) {
      console.log(i);
    }
  } else console.log(n);
};

printNumbers(10);

//Write a loop that makes the following pattern using console.log():
let str = "";
for (let i = 0; i <= 6; i++) {
  console.log((str += "#"));
}

//Use loop to print the following pattern:
let p = 0;
while (p <= 10) {
  console.log(`${p} * ${p} = ${p * p}`);
  p++;
}

//Using loop print the following pattern
n = 0;
do {
  console.log(`${n} ${n ** 2} ${n ** 3}`);
  n++;
} while (n <= 10);

//Use for loop to iterate from 0 to 100 and print only even numbers
for (i = 0; i <= 100; i += 2) {
  console.log(i);
}

//Use for loop to iterate from 0 to 100 and print only odd numbers
for (i = 1; i <= 100; i += 2) {
  console.log(i);
}

//Use for loop to iterate from 0 to 100 and print only prime numbers
for (let j = 2; j <= 100; j++) {
  for (let i = 2; i <= j; i++) {
    if (j % i == 0 && i != j) {
      break;
    } else if (j % i == 0) {
      console.log(j);
    }
  }
}

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`The total number is ${sum}`);

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumOdd = 0;
let sumEven = 0;
for (let i = 0; i <= 100; i++) {
  i % 2 === 0 ? (sumEven += i) : (sumOdd += i);
}
console.log(
  `The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`
);

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let arr = [];
let addEven = 0;
let addOdd = 0;
for (let i = 0; i <= 100; i++) {
  i % 2 === 0 ? (arr[0] = addEven += i) : (arr[1] = addOdd += i);
}
console.log(arr);

//Develop a small script which generate array of 5 random
arrScript = [];
for (let i = 0; i < 5; i++) {
  arrScript.push(Math.floor(Math.random() * 9));
}
console.log(arrScript);

//Develop a small script which generate array of 5 random numbers and the numbers must be unique
let arrNum = [];
function arrRandom(num) {
  for (let i = 0; i < num; i++) {
    const element = Math.floor(Math.random() * 10);
    if (arrNum.includes(element)) {
      num++;
      continue;
    } else {
      arrNum.push(element);
    }
  }
}
arrRandom(5);
console.log(arrNum);

//Develop a small script which generate a six characters random id:
let ranId = Math.random().toString(36).substr(2, 6);
console.log(ranId);

/****************************EXERCISE 2*********************************/

//Develop a small script which generate any number of characters random id:
function makeid(length) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.random() * characters.length);
  }
  return result;
}
console.log(makeid(15));

//Write a script which generates a random hexadecimal number.
const result = Math.random().toString(16).substring(2, 7);
console.log(result);

//Write a script which generates a random rgb color number.
let randValue = (value) => {
  return Math.round(Math.random() * value);
};
const rgbGen = () => {
  return `rgb(${randValue(255)},${randValue(255)},${randValue(255)})`;
};

console.log(rgbGen());

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

//Using the above countries array, create the following new array.
const newCountries = [];
for (let i = 0; i < countries.length; i++) {
  newCountries.push(countries[i]);
}
console.log(newCountries);

//Using the above countries array, create an array for countries length'.
const countriesLength = [];
for (let i = 0; i < countries.length; i++) {
  countriesLength.push(countries[i].length);
}
console.log(countriesLength);

//Use the countries array to create the following array of arrays:
const countriesModify = [];
for (let i = 0; i < countries.length; i++) {
  countriesModify.push([
    countries[i],
    countries[i].slice(0, 3),
    countries[i].length,
  ]);
}
console.log(countriesModify);

//In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
const countriesLand = [];
for (let i = 0; i < countries.length; i++) {
  countries[i].includes("land")
    ? countriesLand.push(countries[i])
    : "All these countries are without land";
}
console.log(countriesLand);

//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
const countriesAI = [];
for (let i = 0; i < countries.length; i++) {
  countries[i].endsWith("ia")
    ? countriesAI.push(countries[i])
    : "These are countries ends without ia";
}
console.log(countriesAI);

//Using the above countries array, find the country containing the biggest number of characters.
let countryCharacter = "";
for (let i = 0; i < countries.length; i++) {
  countryCharacter.length > countries[i].length
    ? countryCharacter
    : (countryCharacter = countries[i]);
}
console.log(countryCharacter);

//Using the above countries array, find the country containing only 5 characters.
const countriesFive = countries.filter((country) => country.length === 5);
console.log(countriesFive);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

//Find the longest word in the webTechs array
let webTechCharacter = "";
for (let i = 0; i < webTechs.length; i++) {
  webTechCharacter.length > webTechs[i].length
    ? webTechCharacter
    : (webTechCharacter = webTechs[i]);
}
console.log(webTechCharacter);

// Use the webTechs array to create the following array of arrays:
for (let [i, web] of webTechs.entries()) {
  console.log([web, i]);
}

const mernStack = ["MongoDB", "Express", "React", "Node"];
//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let acronymn = "";
for (men of mernStack) {
  acronymn += men[0];
}
console.log(acronymn);

//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (let web of webTechs) {
  console.log(web);
}

//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = ["banana", "orange", "mango", "lemon"].reverse();
console.log(fruits);

//Print all the elements of array as shown below.
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
].flat();
for (let code of fullStack) {
  console.log(code);
}

/****************************EXERCISE 3*********************************/
//Copy countries array(Avoid mutation)
const newCountriesArray = countries.slice();
console.log(newCountriesArray);

//Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const sortedCountries = newCountriesArray.sort();
console.log(sortedCountries);

//Sort the webTechs array and mernStack array
const sortWebTech = webTechs.sort();
console.log(sortWebTech);

const sortMernStack = mernStack.sort();
console.log(sortMernStack);

//Extract all the countries contain the word 'land' from the countries array and print it as array
const countryLand = countries.filter((country) => country.includes("land"));
console.log(countryLand);

//Find the country containing the hightest number of characters in the countries array
const countryCharacterArr = countries.reduce(
  (acc, cur) => (cur.length > acc.length ? (acc = cur) : acc),
  ""
);
console.log(countryCharacterArr);

//Extract all the countries contain the word 'land' from the countries array and print it as array
const countriesLandArr = [];
for (let i = 0; i < countries.length; i++) {
  countries[i].includes("land")
    ? countriesLandArr.push(countries[i])
    : "All these countries are without land";
}
console.log(countriesLandArr);

//Extract all the countries containing only four characters from the countries array and print it as array
const filterCountries = countries.filter(country => country.length === 4 )
console.log(filterCountries)

//Extract all the countries containing two or more words from the countries array and print it as array
const twoWords = [];
for (let country of countries) {
  if (country.length > 2) {
    twoWords.push(country);
  }
}
console.log(twoWords);

//Reverse the countries array and capitalize each country and stored it as an array
const reverseCountry = []
for (let each of countries.reverse()) {
    reverseCountry.push(each.toUpperCase());
}
console.log(reverseCountry)