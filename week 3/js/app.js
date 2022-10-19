const { type } = require("os");

/************************************EXERCISE 1*********************************/
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = "clinton";
const lastName = "okechukwu";
const country = "nigeria";
const city = "ikeja";
const age = 24;
const isMarried = false;
const yearPresent = 2022;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof yearPresent);

// Check if type of '10' is equal to 10
console.log("10" == 10, "10" === 10);

// Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") == 10, parseInt("9.8") === 10);

// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.
console.log(2 ? true : false);
console.log("blue" ? true : false);
console.log("steven" ? true : false);
console.log(0 ? true : false);
console.log(undefined ? true : false);
console.log(null ? true : false);

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'
// Find the length of python and jargon and make a falsy comparison statement.
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
console.log("python".length !== "jargon".length);

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')
// There is no 'on' in both dragon and python

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));
console.log(!"dragon".includes("on"));

// Use the Date object to do the following activities

// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());

/************************************EXERCISE 2*********************************/

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = +prompt("whats the base", "must be a number");
let height = +prompt(("whats the height", "must be a number"));
const areaTri = (1 / 2) * base * height;
console.log(areaTri);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = +prompt('Whats Side A')
let sideB = +prompt("Whats Side B");
let sideC = +prompt("Whats Side C");
const perimeterTri = sideA + sideB + sideC

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = +prompt("whats the length", "must be a number");
let width = +prompt(("whats the width", "must be a number"));
const areaRec = length * width;
const perimeterRec = 2 * (length + width);
console.log(areaRec);
console.log(perimeterRec);

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = +prompt("what's the radius")
let pi = 3.14
const areaCircle = pi *radius * radius
console.log(areaCircle)

//Calculate the slope, x-intercept and y-intercept of y = 2x -2 */
let slopefunc = (y, m, c) => {
let slope = m
let yIntercept = c/y
let xIntercept = -c/m

    return{
        'slope':slope,
        'yIntercept': yIntercept,
        'xIntercept': xIntercept,
        'result': `The slope of the line is ${slope} with y intercept at ${yIntercept} and x intercept at ${xIntercept}`
    }

}
slopefunc(1,2,-2)
let slopeOne = slopefunc(1,2,-2).slope

// //Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2
let y1 = 2
let x2 = 6
let y2 = 10
const m = (y2 - y1) / (x2 - x1)
console.log(m)

// //Compare the slope of above two questions.
let compareSlopes = (x, y) => {
if (Math.abs(x) < Math.abs(y)){
    return 'the second line is steeper than the first'
}else if (Math.abs(x) > Math.abs(y)){
    return 'the first line is steeper than the second'
}else{
    return 'both lines are of the same slope'
}

}
console.log(compareSlopes(slopeOne, m))

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = +prompt("Enter hours");
let rate = +prompt("Enter rate");
console.log(hours * rate)

//If the length of your name is greater than 7 say, your name is long else say your name is short.
console.log("clinton".length > 7 ? "my name is long" : "my name is short");

//Compare your first name length and your family name length and you should get this output.
console.log(
  firstName.length > lastName.length
    ? `My first name, ${firstName} is longer than my last name,  ${lastName} `
    : ` My last name, ${lastName} is longer than my first name,  ${firstName} `
);

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 24;
let yourAge = 22;
console.log(`I am ${myAge - yourAge} years older than you`);

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let userAge = +prompt('your age')
userAge >= 18
  ? `You are ${userAge}. You are old enough to drive`
  : `You are ${userAge}. You will be allowed to drive after ${18-userAge} years.`;

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let userYear = +prompt('enter year')
userYear <= 100
  ? `You are ${userYear}. You have ${(100 - userYear) * 24 *60*60} seconds to live`
  : `You are ${userYear}. YYou should be dead`;

let date = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();
let hour = now.getHours();
let minutes = now.getMinutes();
console.log(`${year}-${month}-${date} ${hour}:${minutes} \n
${date}-${month}-${year} ${hour}:${minutes} \n
${date}/${month}/${year} ${hour}:${minutes} \n`);

/************************************EXERCISE 3*********************************/
//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
console.log(
  `${year}-${month.toLocaleString().padStart(2, 0)}-${date
    .toLocaleString()
    .padStart(2, 0)} ${hour.toLocaleString().padStart(2, 0)}:${minutes
    .toLocaleString()
    .padStart(2, 0)} `
);
