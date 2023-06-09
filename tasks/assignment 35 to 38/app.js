// Assignemnt 35-38 Functions

// 1. Write a function that displays current date & time in your browser.
function showDateAndTime() {
    var timeAndDate = new Date()
    document.write("<br> current Time and Date: " + timeAndDate)
  }
  showDateAndTime()
  document.write("<hr>")
  
  // 2. Write a function that takes first & last name and then it
  // greets the user using his full name.
  function greetUser(firstName, lastName) {
    alert("Welcome " + firstName.concat(" ", lastName))
  }
  
  greetUser("John", "Doe")
  
  // 3. Write a function that adds two numbers (input by user)
  // and returns the sum of two numbers.
  function sum() {
    var n1 = +prompt("Please enter first number")
    var n2 = +prompt("Please enter second number")
  
    return n1 + n2
  }
  
  alert(sum())
  
  // 4. Calculator:
  // Write a function that takes three arguments num1, num2
  // & operator & compute the desired operation. Return and
  // show the desired result in your browser.
  
  function calculate(num1, num2, operator) {
    var result
  
    switch (operator) {
      case '+':
        result = num1 + num2
        break
      case '-':
        result = num1 - num2
        break
      case '*':
        result = num1 * num2
        break
      case '/':
        result = num1 / num2
        break
      case '%':
        result = num1 % num2
        break
      default:
        return "Invalid operator"
    }
  
    document.write("<p>The result of " + num1 + " " + operator + " " + num2 + " is: " + result + "</p>")
  
    return result
  }
  
  calculate(5, 3, '+')
  
  document.write("<hr>")
  
  // 5. Write a function that squares its argument.
  function square(num) {
    return num ** 2
  }
  
  document.write("<br> 2 Squared is " + square(2))
  
  document.write("<hr>")
  
  // 6. Write a function that computes factorial of a number.
  function factorial(num) {
    if (num < 0 || Number.isInteger(num) === false) {
      return "Invalid input. Factorial is defined for non-negative integers."
    }
  
    if (num === 0) {
      return 1
    }
  
    return num * factorial(num - 1)
  }
  
  var number = 5
  var result = factorial(number)
  document.write("The factorial of " + number + " is: " + result)
  
  document.write("<hr>")
  
  // 7. Write a function that take start and end number as inputs
  // & display counting in your browser.
  function displayCounting(startNum, endNum) {
    document.write("<br>Counting from " + startNum + " to " + endNum)
    for (var index = startNum; index <= endNum; index++) {
      document.write("<br>" + index)
    }
  }
  
  displayCounting(10, 50)
  
  document.write("<hr>")
  
  
  // 8. Write a nested function that computes hypotenuse of a right angle triangle. 
  function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(value) {
      return value ** 2
    }
    var baseSquared = calculateSquare(base)
    var perpendicularSquared = calculateSquare(perpendicular)
    var hypotenuseSquared = baseSquared + perpendicularSquared
  
    return Math.sqrt(hypotenuseSquared)
  
  }
  
  var baseLength = 3
  var perpendicularLength = 4
  var hypotenuse = calculateHypotenuse(baseLength, perpendicularLength)
  
  document.write("Hypotenuse of right angle trianagle (base = " + baseLength + ", perpendicular = " + perpendicularLength + ") is  ")
  document.write("<hr>")
  
  
  // 9. Write a function that calculates the area of a rectangle.
  //  A = width * height
  //  Pass width and height in following manner:
  // i. Arguments as value
  // ii. Arguments as variables
  document.write("<br>Calculate area")
  function calculateArea(width, height) {
    var a = width * height
    return a
  }
  
  // 9.1 width and height as value
  var area1 = calculateArea(7, 10)
  document.write("<br>Arguments passed as value (7, 10) area: " + area1)
  
  // 9.2 width and height as variables
  var width = 5
  var height = 8
  var area2 = calculateArea(width, height)
  document.write("<br>Arguments passed as variables (5, 8) area: " + area2)
  
  document.write("<hr>")
  
  // 10. Write a JavaScript function that checks whether a passed string is palindrome or not?
  // A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
  function isPalindrome(str) {
    var reversedStr = str.toLowerCase().split("").reverse().join("")
    if (str.toLowerCase() === reversedStr) {
      document.write("<br> String: " + str + " is a Palindrome")
    } else {
      document.write("<br> String: " + str + " is not a Palindrome")
    }
  }
  isPalindrome("madam")
  isPalindrome("hello")
  
  document.write("<hr>")
  
  // 11. Write a JavaScript function that accepts a string as a
  // parameter and converts the first letter of each word of the string in upper case.
  // EXAMPLE STRING : 'the quick brown fox'
  // EXPECTED OUTPUT : 'The Quick Brown Fox' 
  document.write("<br>Capitalize first letter of each word")
  function capitalizeWords(str) {
    var words = str.split(" ")
    
    for (var index = 0; index < words.length; index++) {
      var word = words[index].toLowerCase()
      var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
      words[index] = capitalizedWord
    }
    var capedWords = words.join(" ")
    document.write("<br>String: " + str)
    document.write("<br>Capitalized String: " + capedWords)
  }
  
  capitalizeWords("the quick brown fox")
  
  document.write("<hr>")
  
  // 12. Write a JavaScript function that accepts a string as a
  // parameter and find the longest word within the string.
  // EXAMPLE STRING : 'Web Development Tutorial'
  // EXPECTED OUTPUT : 'Development'
  document.write("<br>Find the longest word")
  function findLongestWord(str) {
    var words = str.split(" ")
    var longestWord = ""
    
    for (var index = 0; index < words.length; index++) {
      var word = words[index];
      if (word.length > longestWord.length) {
        longestWord = word
      }
    }
  
    console.log(longestWord)
    document.write("<br>String: " + str)
    document.write("<br>Longest word: " + longestWord)
  }
  
  findLongestWord("Web Development Tutorial")
  
  document.write("<hr>")
  
  // 13. Write a JavaScript function that accepts two arguments, a
  // string and a letter and the function will count the number of
  // occurrences of the specified letter within the string.
  // Sample arguments : 'JSResourceS.com', 'o'
  document.write("Count letters")
  function countLetters(str, letter) {
    var count = 0;
    for (var index = 0; index < str.length; index++) {
      if (str.charAt(index).toLowerCase() === letter.toLowerCase()) {
        count++
      }
    }
    document.write("<br>String: " + str)
    document.write("<br>Letter to count: " + letter)
    document.write("<br>There are " + count + ' "' + letter + '" in this string');
  }
  countLetters("JSResources.com", "o")
  
  document.write("<hr>")
  
  // 14. The Geometrizer
  document.write("The Geometrizer")
  // Create 2 functions that calculate properties of a circle, using
  // the definitions here.
  // Create a function called calcCircumference:
  // • Pass the radius to the function.
  // • Calculate the circumference based on the radius, and output
  // "The circumference is NN".
  // Create a function called calcArea:
  // • Pass the radius to the function.
  // • Calculate the area based on the radius, and output "The area
  // is NN".
  
  function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius 
    return circumference.toFixed(2)
  }
  function calcArea(radius) {
    var area = Math.PI * (radius ** 2)
    return area.toFixed(2)
  }
  var radius = 5
  document.write("<br> The radius is " + radius)
  document.write("<br> The circumeference is " + calcCircumference(radius))
  document.write("<br> The area is " + calcArea(radius))