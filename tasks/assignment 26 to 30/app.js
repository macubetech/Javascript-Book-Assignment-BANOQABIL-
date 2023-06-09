       // Assignemnt 26-30 Math Methods

// 1 and 2. Write a program that takes a positive/negative integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
document.write("<hr>")
var num = +prompt("Please enter a number to see its round off, ceil and floor value");

// Calculate round, floor and ceil values
var roundNum = Math.round(num);
var floorNum = Math.floor(num);
var ceilNum = Math.ceil(num);

document.write("<br> Number: " + num)
document.write("<br> round off value: " + roundNum)
document.write("<br> floor value: " + floorNum)
document.write("<br> ceil value: " + ceilNum)

document.write("<hr>")

// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
var n1 = -4
var absoluteVal = Math.abs(n1)
document.write("<br> Number: " + n1)
document.write("<br> Absolute Value: " + absoluteVal)

document.write("<hr>")

// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("<br> random dice value: " + diceValue)

document.write("<hr>")

// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
var tossValue = Math.floor(Math.random() * 2) + 1

if (tossValue === 1) {
  document.write("<br>" + tossValue)
  document.write("<br> random toss value: Heads")
}else {
  document.write("<br>" + tossValue)
  document.write("<br> random toss value: Tails")
}

document.write("<hr>")

// 6. Write a program that shows a random number between 1 and 100 in your browser.
var randomN = Math.floor(Math.random() * 100)

document.write("<br> Random number 1 and 100: " + randomN)


document.write("<hr>")

// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
var usrInput = prompt("Please enter your weight:")
var cleanedWeight = usrInput.replace(/[^\d.]/g, "")
document.write("<br> the weight of user is " + cleanedWeight + " kilograms")


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
var secretNumber = 3
var userNumber = +prompt("Enter a number between 1 and 10")
if (userNumber == secretNumber) {
  alert("Congratulations, you guessed it correctly")
}else {
  alert("Try again")
}