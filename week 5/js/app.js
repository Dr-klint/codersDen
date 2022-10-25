import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";

/*********************EXERCISE 1*********************************/
//Declare an empty array;
let arr = new Array();
console.log(arr);

//Declare an array with more than 5 number of elements
arr = [2, 4, 3, 3, 6];
console.log(arr);

//Find the length of your array
console.log(arr.length);

//Get the first item, the middle item and the last item of the array
console.log(arr[0]);
console.log(arr[Math.floor(arr.length / 2)]);
console.log(arr[arr.length - 1]);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ["clinton", true, "techGod", 100, "awesome", "grit", true];
console.log(mixedDataTypes.length);

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

//Print the array using console.log()
console.log(itCompanies);

//Print the number of companies in the array
console.log(itCompanies.length);

//Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.ceil(itCompanies.length / 2) - 1]);
console.log(itCompanies[itCompanies.length - 1]);

//Print out each company
itCompanies.forEach((company) => console.log(company));

//Change each company name to uppercase one by one and print them out
let UpperCompanies = itCompanies.map(
  (companies) => companies[0].toUpperCase() + companies.slice(1)
);
console.log(UpperCompanies);
console.log(itCompanies[0][0].toUpperCase() + itCompanies[0].slice(1)); // To show the longer method of doing it

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(
  `${UpperCompanies.slice(0, -1).join(", ")} and ${UpperCompanies.slice(
    -1
  )} are big IT companies`
);

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
console.log(
  itCompanies.includes("Amazon")
    ? itCompanies[itCompanies.indexOf("Amazon")]
    : "it is not found"
);

//Filter out companies which have more than one 'o' without the filter method
let filterCompanies = [];
itCompanies.map((companies) =>
  !companies.includes("oo") ? filterCompanies.push(companies) : ""
);
console.log(filterCompanies);

//Sort the array using sort() method
console.log(filterCompanies.sort());

//Reverse the array using reverse() method
console.log(filterCompanies.reverse());

//Slice out the first 3 companies from the array
console.log(filterCompanies.slice(0, 3));

//Slice out the last 3 companies from the array
console.log(filterCompanies.slice(-3));

//Slice out the middle IT company or companies from the array
console.log(filterCompanies[Math.floor(filterCompanies.length / 2)]);

//Remove the first IT company from the array
console.log(filterCompanies.shift());

//Remove the middle IT company or companies from the array
console.log(
  filterCompanies.splice(Math.ceil(filterCompanies.length / 2) - 1, 1)
);

// Remove the last IT company from the array
console.log(filterCompanies.pop());

console.log(filterCompanies.splice(0));

/************************************EXERCISE 2*********************************/
// create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js
console.log(countries);
console.log(webTechs);

//First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const strArr = text.split(" ");
console.log(strArr.length);

//In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat");
console.log(shoppingCart);

//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar");
console.log(shoppingCart);

//remove 'Honey' if you are allergic to honey
shoppingCart.splice(-2, 1);
console.log(shoppingCart);

//modify Tea to 'Green Tea'
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
console.log(
  countries.includes("Ethiopia")
    ? countries[countries.indexOf("Ethiopia")].toUpperCase()
    : countries.push("Ethiopia")
);

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
console.log(
  webTechs.includes("Sass") ? "Sass is a CSS preprocess" : webTechs.push("Sass")
);

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

/*********************EXERCISE 3*********************************/
//The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Sort the array and find the min and max age
console.log(ages.sort());
console.log(ages[0], ages[ages.length - 1]);

//Find the median age(one middle item or two middle items divided by two)
console.log(
  ages.length % 2 === 0
    ? (ages[Math.ceil(ages.length / 2) - 1] +
        ages[Math.floor(ages.length / 2)]) /
        2
    : ages[Math.ceil(ages.length / 2) - 1]
);

//Find the average age(all items divided by number of items)
let sum = 0;
for (const age of ages) {
  sum += age;
}
console.log(sum / ages.length);

//Find the range of the ages(max minus min)
console.log(ages[ages.length - 1] - ages[0]);

//Compare the value of (min - average) and (max - average), use abs()
console.log(
  Math.abs(
    ages[0] -
      ages[Math.ceil(ages.length / 2) - 1] -
      (ages[ages.length - 1] - ages[Math.ceil(ages.length / 2) - 1])
  )
);

//method 1.Slice the first ten countries from the countries array
console.log(countries.slice(0, 10));

//Find the middle country(ies) in the countries array
console.log(countries[Math.ceil(countries.length / 2) - 1]);
console.log(countries[Math.floor(countries.length / 2)]);

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
console.log(
  countries.length % 2 === 0
    ? countries.slice(0, Math.ceil(countries.length / 2) - 1)
    : countries.slice(0, Math.round(countries.length / 2))
);


