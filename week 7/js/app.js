//Declare a function fullName and it print out your full name.
const fullName = function (fullName) {
  console.log(fullName);
};
fullName("okechukwu clinton");

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function nameFull(firstName, lastName) {
  let fullname = `${firstName} ${lastName}`;
  return fullname;
}
console.log(nameFull("clinton", "okechukwu "));

//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}
console.log(addNumbers(2, 4));

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
  let area = length * width;
  return area;
}
console.log(areaOfRectangle(4, 5));

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = (length, width) => 2 * (length + width);
console.log(perimeterOfRectangle(3, 4));

//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = (length, width, height) => length * width * height;
console.log(volumeOfRectPrism(3, 4, 3));

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = function (r) {
  area = Math.PI.toFixed() * r * r;
  return area;
};
console.log(areaOfCircle(3));

//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = (r) => 2 * Math.PI.toFixed() * r;
console.log(circumOfCircle(5));

//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density
function density(mass, volume) {
  return mass * volume;
}
console.log(density(4, 5));

//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed
const speed = (distance, timeTaken) => distance / timeTaken;
console.log(speed(56, 2));

//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weight = (mass, gravity) => mass * gravity;
console.log(weight(4, 5));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
const convertCelsiusToFahrenheit = (c) => (c * 9) / 5 + 32;
console.log(convertCelsiusToFahrenheit(100));

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
const calculateBmi = (weight, height) => {
  let bmi = weight / (height * height);
  return bmi <= 18.5
    ? "underweight"
    : bmi > 18.5 && bmi <= 24.9
    ? "Normal"
    : bmi > 25 && bmi <= 29
    ? "Overweight"
    : bmi > 30
    ? "Obsese"
    : "";
};
console.log(calculateBmi(80, 1.89));

//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const checkSeason = (month) => {
  switch (true) {
    case month === "september" || month === "october" || month === "november":
      console.log("the season is autumn");
      break;
    case month === "december" || month === "january" || month === "february":
      console.log("the season is winter");
      break;
    case month === "march" || month === "april" || month === "may":
      console.log("the season is spring");
      break;
    case month === "june" || month === "july" || month === "august":
      console.log("the season is summer");
      break;
    default:
      console.log("you didnt put a correct month");
  }
};
checkSeason("january");

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax = function (firstNum, secondNum, thirdNum) {
  return firstNum > secondNum
    ? firstNum
    : secondNum > thirdNum
    ? secondNum
    : thirdNum;
};
console.log(findMax(12, 34, 56));
console.log(findMax(0, -10, -2));

/****************************EXERCISE 2*********************************/
// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
let solveLinEquation = (y, m, c) => {
  let slope = m / y;
  let yIntercept = c / y;
  let xIntercept = -c / m;

  return {
    slope: slope,
    yIntercept: yIntercept,
    xIntercept: xIntercept,
    statement: `The slope of the line is ${slope}, its y-intercept is ${yIntercept} and its x-intercept is ${xIntercept}`,
  };
};
console.log(solveLinEquation(2, 5, -7).statement);

//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
const solveQuadratic = function (a, b, c) {
  const firstSolve = b ** 2 - 4 * a * c;
  const firstValue = ((-b + Math.sqrt(Math.abs(firstSolve))) / 2) * a;
  const secondValue = ((-b - Math.sqrt(Math.abs(firstSolve))) / 2) * a;
  return `${firstValue} ${secondValue}`;
};
console.log(solveQuadratic(1, 4, 4));

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function arrFunction(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
arrFunction([2, 3, 4, 5, 6, 6]);

//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
const showDateTime = function () {
  const now = new Date();
  let date = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  console.log(`${date}/${month}/${year} ${month}:${second}`);
};
showDateTime();

//Declare a function name swapValues. This function swaps value of x to y
const swapValues = function (x, y) {
  let a = y;
  y = x;
  x = a;
  return `${x} ${y}`;
};
console.log(swapValues(2, 3));

//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
const reverseArray = (arr) => arr.reverse();
console.log(reverseArray([1, 4, 6, 6, 7]));

//Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
const capitalizeArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].toUpperCase();
  }
  return arr;
};
console.log(capitalizeArray(["nigeria", "tunde"]));

//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const addItem = function (item) {
  let arr = [];
  arr.push(item);
  return arr;
};
console.log(addItem("item"));

//Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const removeItem = function (index) {
  let arr = [4, 5, 6, 3, "help", true];
  return arr.filter((item) => item !== arr[index]);
};
console.log(removeItem(2));

//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
const sumOfNumbers = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) sum += i;
  return sum;
};
console.log(sumOfNumbers(100));

//Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdds = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i += 2) {
    sum += i;
  }
  return sum;
};
console.log(sumOfOdds(100));

//Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
const sumOfEven = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i += 2) {
    sum += i;
  }
  return sum;
};
console.log(sumOfEven(100));

//Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
const evensAndOdds = function (num) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i <= num; i++) {
    i % 2 === 0 ? even++ : odd++;
  }
  return `The number of odds are ${odd}.
The number of evens are ${even}.`;
};
console.log(evensAndOdds(100));

//Write a function which takes any number of arguments and return the sum of the arguments
const numArguments = function (...arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    sum += i;
  }
  return sum;
};
console.log(numArguments(3, 4, 5, 6, 7, 4, 2, 5));

//Writ a function which generates a randomUserIp.
let randomUserIp = () => {
  let userIp =
    Math.floor(Math.random() * 256) +
    "." +
    Math.floor(Math.random() * 256) +
    "." +
    Math.floor(Math.random() * 256) +
    "." +
    Math.floor(Math.random() * 256);
  return userIp;
};
console.log(randomUserIp());

//Write a function which generates a randomMacAddress
let address = [];
const randomMacAddress = () => {
  for (let r = 0; r <= 5; r++) {
    address.push(
      Math.floor(Math.random() * 1000)
        .toString(16)
        .slice(-2)
        .toUpperCase()
        .padStart(2, "0")
    );
  }
  return address.join(":");
};
console.log(randomMacAddress());

//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
const randomHexaNumberGenerator = function () {
  return `#${Math.floor(Math.random() * 1000000)
    .toString(16)
    .padEnd(6, "0")}`;
};
console.log(randomHexaNumberGenerator());

//Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.// 41XTDbE
const userIdGenerator = () => {
  return `${Math.floor(Math.random() * 1000000)
    .toString(16)
    .toUpperCase()
    .padEnd(7, "0")}`;
};
console.log(userIdGenerator());

/****************************EXERCISE 3*********************************/
//Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// const userIdGeneratedByUser =function(){
//   let arrId = []
//   const noCharacters = +prompt('give number of characters')
//   const noIds = +prompt("give number of id");
//   for(let i=0; i<noIds; i++){
//     arrId.push(`${Math.floor(Math.random() * 10000000)
//       .toString(16)
//       .slice(-noCharacters)
//       .toUpperCase()
//       .padEnd(noCharacters, "0")}`)
//   }
//       return arrId.join(' ')
// }
// console.log( userIdGeneratedByUser())

//Write a function name rgbColorGenerator and it generates rgb colors.
const rgbColorGenerator = () => {
  let randValue = (value) => {
    return Math.round(Math.random() * value);
  };
  return `rgb(${randValue(255)},${randValue(255)},${randValue(255)})`;
};
console.log(rgbColorGenerator());

//Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(n) {
  const arrColours = [];
  for (let i = 0; i < n; i++) {
    arrColours.push(
      `#${Math.round(Math.random() * 10000000)
        .toString(16)
        .slice(-6)
        .padEnd(6, 0)}`
    );
  }
  return arrColours;
}
console.log(arrayOfHexaColors(4));

//Write a function arrayOfRgbColors which return any number of RGB colors in an array
const arrayOfRgbColors = function (n) {
  const arrColours = [];
  for (let i = 0; i < n; i++) {
    let randValue = (value) => {
      return Math.round(Math.random() * value);
    };
    arrColours.push(
      `rgb(${randValue(255)},${randValue(255)},${randValue(255)})`
    );
  }
  return arrColours;
};
console.log(arrayOfRgbColors(3));

//Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
const convertHexaToRgb = (hexa) =>
  `rgb(${parseInt(hexa.slice(1, 3), 16)},${parseInt(
    hexa.slice(3, 5),
    16
  )},${(blue = parseInt(hexa.slice(5), 16))})`;
console.log(convertHexaToRgb("#a3e12f"));

//Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
const convertRgbToHexa = (red, green, blue) =>
  `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
console.log(convertRgbToHexa(163, 225, 47));

//Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
const generateColors = (str, n) => {
  if (str.toLowerCase() === "hexa" && !isNaN(n)) {
    let hexcolors = [];
    let i = 0;
    while (i < n) {
      hexcolors.push(
        `#${Math.floor(Math.random() * 0x1000000)
          .toString(16)
          .padEnd(6, "0")}`
      );
      i++;
    }
    return hexcolors;
  } else if (str.toLowerCase() === "rgb" && !isNaN(n)) {
    let rgbcolors = [];
    let i = 0;
    while (i < n) {
      rgbcolors.push(
        `rgb(${Math.round(Math.random() * 256)}, ${Math.round(
          Math.random() * 256
        )}, ${Math.round(Math.random() * 256)})`
      );
      i++;
    }
    return rgbcolors;
  } else {
    return "You have entered invalid parameters";
  }
};
console.log(generateColors("hexa", 2));

////Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
const shuffleArray = function (arr) {
  return arr.sort((a, b) => Math.random() - Math.random());
};
console.log(shuffleArray([2, 3, 4, 5, 6, 4, 6]));

//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
const factorial = (integer) => {
  let solution = 1;
  if (integer === 0 || integer === 1) {
    return 1;
  } else if (integer > 1) {
    for (let i = 1; i <= integer; i++) {
      solution *= i;
    }
    return solution;
  }
};
console.log(factorial(5));

//Call your function isEmpty, it takes a parameter and it checks if it is empty or not
const isEmpty = (param) => {
  return param === undefined ||
    param === null ||
    param.length === 0 ||
    (typeof param === "string" && param.trim().length === 0) ||
    (param.constructor === Object && Object.keys(param).length === 0)
    ? true
    : false;
};
console.log(isEmpty());

//Call your function sum, it takes any number of arguments and it returns the sum.
const sumFunc = (...anyNumber) => {
  let sum = 0;
  for (const num of anyNumber) {
    sum += num;
  }
  return sum;
};
console.log(sumFunc(2, 3, 20, 8, 10));

//Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items.
const testArray = [2, 8, 9, 10, 56, 63];
const sumOfArrayItems = (arr) => {
  let sum = 0;
  for (let m = 0; m < arr.length; m++) {
    if (!isNaN(arr[m]) && typeof arr[m] == "number") {
      sum += arr[m];
    } else {
      return "Cannot complete operation because the items are not all numbers";
    }
  }
  return sum;
};
console.log(sumOfArrayItems(testArray));

// Write a function called average, it takes an array parameter and returns the average of the items.
const average = (arr) => {
  let sum = 0;
  for (let m = 0; m < arr.length; m++) {
    if (!isNaN(arr[m]) && typeof arr[m] == "number") {
      sum += arr[m];
    } else {
      return "Cannot complete operation because the items are not all numbers";
    }
  }
  return (sum / arr.length).toFixed(1);
};
console.log(average(testArray));

//Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array.
//If the array length is less than five it returns 'item not found'.
const modifyArray = (arr) => {
  if (arr.length < 5) {
    return "Item not found";
  } else if (!Array.isArray(arr)) {
    return "Invalid input";
  } else if (arr.length >= 5) {
    arr[4] = arr[4].toUpperCase();
    return arr;
  }
};
const fruitArray = ["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"];
console.log(modifyArray(fruitArray));

//Write a function called isPrime, which checks if a number is prime number.
//since i will always be less than the parameter the condition  will never allow parameter to be divisible by itself and when parameter is divisible by i then the number is an even number.
//the number also must be greater than 1 reason for the number > 2 instead of true but true still remains the same.
const isPrime = (number) => {
  if (number < 2) {
    return false;
  } else if (number >= 2) {
    for (let i = 2; i <= number; i++) {
      if (number % i == 0 && i != number) {
        return false;
        break;
      } else if (number % i == 0) {
        return true;
      }
    }
  }
};
console.log(isPrime("1"));

//Write a functions which checks if all items are unique in the array.
const arrayUnique = (arr) => arr.length === new Set(arr).size;
console.log(arrayUnique([1, 1, 2, 3]));

//Write a function which checks if all the items of the array are the same data type.
const numArray = [10, 8, 9, 4, 5];
const arrayMix = [1, 2, 3, "foo", 123, true];
const arrayType = (arr) =>
  arr.filter((i) => typeof i === typeof arr[0]).length === arr.length;
console.log(arrayType(numArray));
console.log(arrayType(arrayMix));

//JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
const isValidVariable = (str) =>
  str.match(/[^0-9a-zA-Z\$\_]/g) == null
    ? "valid variable"
    : "invalid variable";
console.log(isValidVariable("khjgc_"));

//Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
const sevenRandomNumbers = () => {
  let set = new Set();
  while (set.size <= 7) {
    set.add(Math.floor(Math.random() * 10) | 0);
  }
  let randomArray = [...set];
  return randomArray;
};
console.log(sevenRandomNumbers());

//Write a function called reverseCountries, it takes countries array and
//first it copy the array and returns the reverse of the original array
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
const reverseCountries = (arr) => {
  const newCountries = [...arr];
  return newCountries.reverse();
};
console.log(reverseCountries(countries));

const swapDigit = function (num) {
  const stringConvert = String(num);
  const outPut = [];
  if (stringConvert.length % 2 === 0) {
    for (let i = 1; i < stringConvert.length; i += 2) {
      outPut.push(stringConvert[i]);
      outPut.push(stringConvert[i - 1]);
    }
  } else {
    const oddStr = stringConvert.slice(1);
    const firstValue = stringConvert[0];
    outPut.push(firstValue);
    for (let i = 1; i < oddStr.length; i += 2) {
      outPut.push(oddStr[i]);
      outPut.push(oddStr[i - 1]);
    }
  }
  const finalRest = outPut.join("");
  return finalRest;
};
console.log(swapDigit(2345356433454565));


