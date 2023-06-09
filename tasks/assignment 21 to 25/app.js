// Assignemnt 20-25 String Methods

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
var firstName = prompt("Please enter your first name")
var lastName = prompt("Please enter your last name")
var fullName = firstName + " " + lastName
alert("Welcome " + fullName)

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
var favoritePhone = prompt("Your favorite phone?")
document.write("<br> My favorite phone is " + favoritePhone)
document.write("<br> Length of string: " + favoritePhone.length)

document.write("<hr>")

// 3.Write a program to find the index of varter “n” in the word
// “Pakistani” and display the result in your browser 
var word = "Pakistani"
var index = -1
// ES3 Way
// for (var i = 0; i < word.length; i++) {
//   if (word.charAt(i) === "n") {
//     index = i
//     break;
//   }
// }

//ES5 Way
var index = word.indexOf('n')
document.write("<br> String: " + word)
document.write("<br> Index of 'n' is " + index)

document.write("<hr>")

// 4.Write a program to find the last index of varter “l” in the
// word “Hello World” and display the result in your browser.

var word1 = "Hello World"
// ES3 Way
// var index = -1
// for (var i = 0; i < word1.length; i++) {
//   if (word1.charAt(i) === "l") {
//     index = i
//   }
// }

// ES5 Way
var index = word1.lastIndexOf("l")
document.write("<br>String: " + word1)
document.write("<br>Last index of 'l' is " + index)

document.write("<hr>")


// 5.Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var character = word.charAt(3)
document.write("<br>String: " + word)
document.write("<br>Character at index 3: " + character)


document.write("<hr>")

// 6. Repeat Q1 using string concat() method.
var firstNamei = prompt("Please enter your first name")
var lastNamei = prompt("Please enter your last name")
fullName = firstNamei.concat(" ", lastName)
alert("Welcome " + fullName)

document.write("<hr>")

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser
var city = "Hyderabad"
var hyd = "Hyder"
var isl = "Islam"
var afterReplacement = city.replace(hyd, isl)
document.write("<br>City: " + city)
document.write("<br>After replacement: " + afterReplacement)

document.write("<hr>")

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
var message = "Ali and Sami are best friends. They play cricket and football together."
var andReplaced = message.replace(/and/g, "&")
document.write("<br>message: " + message)
document.write("<br>After replacement: " + andReplaced)

document.write("<hr>")


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var stringNumber = "472"
var num = Number(stringNumber)

document.write("Value: " + stringNumber + "<br>")
document.write("Type of value: " + typeof stringNumber + "<br>")
document.write("Value: " + num + "<br>")
document.write("Type of value: " + typeof num + "<br>")

document.write("<hr>")


// 10. Write a program that takes user input. Convert and
// show the input in capital varters.
var urs_inp = prompt("Please enter something")
document.write("User Input: " + urs_inp + "<br>")
document.write("Upper case : " + urs_inp.toUpperCase() + "<br>")

document.write("<hr>")

// 11. Write a program that takes user input. Convert and
// show the input in title case.
var usr_inp = prompt("Please enter to convernt it into title case").toLowerCase()
var titleCased = usr_inp[0].toUpperCase() + usr_inp.slice(1)
document.write("User Input: " + usr_inp + "<br>")
document.write("Title case : " + titleCased + "<br>")


document.write("<hr>")

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36
// Remove the dot to display “3536” display in your browser.

var num = 35.36
var str = num.toString().replace(".", "")
document.write("Number: " + num + "<br>")
document.write("Result : " + str + "<br>")

document.write("<hr>")

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

var usrName = prompt("Please enter your name")
var hasSpecialChar = false
for (var index = 0; index < usrName.length; index++) {
  var element = usrName.charCodeAt(index)
  if (element === 33 || element === 44 || element === 46 || element === 64) {
    hasSpecialChar = true
    break;
  }
}

if (hasSpecialChar) {
  alert("Please enter a valid username")
} else {
  alert("username accepted")
}

document.write("<hr>")

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability

var A = ["cake", "apple pie", "cookie", "chips", "patties"]

var userInput = prompt("Welcome to ABC Bakery, what do you want to order?")
var foundItem = ""
var itemIndex = -1

for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === userInput.toLowerCase()) {
    foundItem = A[i]
    itemIndex = i
    break;
  }
}

if (itemIndex !== -1) {
  alert(foundItem + " is available at index " + itemIndex + " in our bakery.")
} else {
  alert("We are Sorry, " + userInput + " is not available in our bakery.")
}

document.write("<hr>")


// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
var password = prompt("Enter a password that contains alphabets and numbers, is at least 6 characters long, and does not start with a number: ")
var hasAlphabet = false
var hasNumber = false
var startsWithAlphabet = false

for (var i = 0; i < password.length; i++) {
  var charCode = password.charCodeAt(i)
  if (charCode >= 48 && charCode <= 57) {
    hasNumber = true
  } else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
    hasAlphabet = true
    if (i == 0) {
      startsWithAlphabet = true
    }
  }
}

if (password.length < 6) {
  document.write("<br> Entered Password: " + password)
  document.write("<br> Invalid password. Password must be at least 6 characters long. <br> Please enter a valid password")
} else if (!hasAlphabet || !hasNumber) {
  document.write("<br> Invalid password. Password must contain both alphabets and numbers. <br> Please enter a valid password")
} else if (startsWithAlphabet == false) {
  document.write("<br> Invalid password. Password must not start with a number. <br> Please enter a valid password")
} else {
  document.write("<br> Valid password!")
}

document.write("<hr>")

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = "University of Karachi"
var arr = university.split('')
document.write("<br>String: " + university)
for (var index = 0; index < arr.length; index++) {
  var element = arr[index];
  document.write("<br>" + element)
}

// 17. Write a program to display the last character of a user input 
var userInput1 = prompt("Please enter something")

document.write("<br> User input: " + userInput1)
document.write("<br> Last character of input: " + userInput1[userInput1.length - 1])

document.write("<hr>")


// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string
var st_string = "The quick brown fox jumps over the lazy dog"
var ar_array = st_string.toLowerCase().split(" ")
var the_Count = 0
for (var index = 0; index < ar_array.length; index++) {
  var element = ar_array[index];
  if (element === "the") {
    the_Count++
  }
}
document.write("<br> String: " + st_string)
document.write("<br> there are " + the_Count + " occurrence(s) of word 'the'")
