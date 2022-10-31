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




