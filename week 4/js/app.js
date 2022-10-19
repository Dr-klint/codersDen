// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let userInput = +prompt('Enter your age')
if(userInput >= 18){
    console.log("You are old enough to drive");
}else{
    console.log(`you need to wait for ${18 - userInput} more years`)
}

//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = 24
let yourAge = +prompt("Enter your age");
if(myAge > yourAge){
    console.log(`i am older by ${myAge - yourAge}`)
}else{
    console.log(`You are older by ${yourAge - myAge}`)
}

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4;
let b = 3;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

a > b ? console.log("a is greater than b") : console.log("a is less than b");

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let num = +prompt('Enter a number')
if(num % 2 === 0){
    console.log(`${num} is even`)
}else{
    console.log(`${num} is odd`);
}

/************************************EXERCISE 2*********************************/

//Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let scores = +prompt('Enter your score')
if(scores >= 80 && scores <= 100){
    console.log(`You scored ${scores} and have an A`)
}else if(scores >= 70 && scores <= 89){
    console.log(`You scored ${scores} and have an B`)
}else if(scores >= 60 && scores <= 69){
    console.log(`You scored ${scores} and have an C`)
}else if(scores >= 50 && scores <= 59){
    console.log(`You scored ${scores} and have an D`)
}else if(scores >= 0 && scores <= 49){
    console.log(`You scored ${scores} and have an F`)
}else{
    console.log(`you didnt enter a number between 0 and 100`)
}

//Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let month = prompt("What month").toLocaleLowerCase();
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

//Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt("What day").toLocaleLowerCase();
switch (day) {
  case "monday":
    console.log(`${day} is a working day`);
    break;
  case "tuesday":
    console.log(`${day} is a working day`);
    break;
  case "wednesday":
    console.log(`${day} is a working day`);
    break;
  case "thursday":
    console.log(`${day} is a working day`);
    break;
  case "friday":
    console.log(`${day} is a working day`);
    break;
  case "saturday":
    console.log(`${day} is a weekend `);
    break;
  case "sunday":
    console.log(`${day} is a weekend `);
    break;
  default:
    console.log(`not a day of the week`);
}

/************************************EXERCISE 3*********************************/
//Write a program which tells the number of days in a month.
let monthDay = prompt('input a month').toLocaleLowerCase()
switch(true){
    case (monthDay === 'january' || monthDay === 'march' || monthDay === 'july' || monthDay === 'august' || monthDay === 'october' || monthDay === 'december' ):
        console.log(`${monthDay} hath 31 days`)
        break;
    case(monthDay === 'september' || monthDay === 'april' || monthDay === 'may' || monthDay === 'june' || monthDay === 'november'):
    console.log(`${monthDay} hath 30 days`)
    break;
    case(monthDay === 'february'):
    console.log(`${monthDay} hath 28 days`)
    break;
    default:
        console.log(`you didnt pick a correct month`)
}
