   // Assignemnt 31-34 Date Methods

// 1. Write a program that displays current date and time in your browser.
var d = new Date()
document.write("<br><br>" + d)

document.write("<hr>")

// 2. Write a program that alerts the current month in words. For example December.
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var monthName = months[new Date().getMonth()]
alert(monthName)
document.write("<br> Current Month: " + monthName)

document.write("<hr>")

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
var days = ["Sun", "Mon", "Tue", "wed", "Thu", "Fri", "Sat"]
var dayName = days[new Date().getDay()]
alert(dayName)
document.write("<br> Today is " + dayName)

// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
var day = new Date().getDay()
if (day === 0 || day === 6) {
  document.write("<br> Its Fun day")
}

document.write("<hr>")

// 5. Write a program that shows the message “First fifteen days of the month” 
// if the date is less than 16th of the month else shows “Last days of the month”.
var date = new Date().getDate()
if (date < 16) {
  document.write("<br> First fifteen days of the month")
} else {
  document.write("<br> Last days of the month")
}

document.write("<hr>")

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like to represent the Date object.
var currentDate = new Date()
var timeInMilisecs = currentDate.getTime()
var minutesSince = timeInMilisecs / (1000 * 60)
document.write("<br>Current Date: " + currentDate)
document.write("<br>Elapsed milliseconds since Jan 11970: " + timeInMilisecs)
document.write("<br>Elapsed minutes since Jan 1 1970: " + minutesSince)

document.write("<hr>")

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
var currentTime = new Date()
var hour = currentTime.getHours()

if (hour < 12) {
  document.write("<br>It's AM")
} else {
  document.write("<br>It's PM")
}
document.write("<hr>")

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named laterDate.
var laterDate = new Date(2020, 11, 31) // in js, month is zero-based, so december = 11


// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on (x June 18, 2015 x) March 23 2023
var ramadanStartDate = new Date(2015, 5, 18)
var currentDate = new Date()

var timeDifference = currentDate.getTime() - ramadanStartDate.getTime()
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
document.write("<br>" + daysPassed + " days have passed since 1st Ramadan, 2015")

document.write("<hr>")

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the beginning of 2015.
// Date points
var beginningOf2015 = new Date("January 1, 2015")
var reference = new Date("December 5, 2015 22:50:16")

// Calculate the elapsed time in seconds
var elapsedSeconds = Math.abs(reference.getTime() - beginningOf2015.getTime()) / 1000

document.write("<br>On refernece date: " + reference + ", <br> " + elapsedSeconds + " seconds had passed since the beginning of 2015")

document.write("<hr>")

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and finally display the date object in your browser. 
// Create a Date object for the current date and time
var currentDate = new Date()
var currentDateTime = currentDate
currentDate.setHours(currentDate.getHours() - 1)
var oneHourAgoDateTime = currentDate

document.write("Current Date and Time: " + currentDateTime + "<br>")
document.write("1 Hour ago, it was : " + oneHourAgoDateTime)


// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
var currentDate = new Date()
currentDate.setFullYear(currentDate.getFullYear() - 100)
var formattedDate = currentDate

alert(currentDate)

document.write("<hr>")


// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.
var age = +prompt("Enter your age:")

var currentYear = new Date().getFullYear()
var birthYear = currentYear - age

document.write("<br>Your age: " + age)
document.write("<br>Your birth year is: " + birthYear)

document.write("<hr>")


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
var customerName = prompt("Enter customer name:")
var currentMonth = prompt("Enter current month:")
var numberOfUnits = +prompt("Enter number of units:")
var chargesPerUnit = +prompt("Enter charges per unit:")
var latePaymentSurchargeRate = +prompt("Enter late payment surcharge rate (%):")

// Calculate bill amounts
var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2)
var latePaymentSurcharge = ((netAmountPayable * latePaymentSurchargeRate) / 100).toFixed(2)
var grossAmountPayable = (parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge)).toFixed(2)

// Display the bill details in the browser
document.write("<h2>K-Electric Bill</h2>")
document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>")
document.write("<p><strong>Month:</strong> " + currentMonth + "</p>")
document.write("<p><strong>Number of Units:</strong> " + numberOfUnits.toFixed(2) + "</p>")
document.write("<p><strong>Charges per Unit:</strong> RS." + chargesPerUnit.toFixed(2) + "</p>")
document.write("<p><strong>Net Amount Payable (within Due Date):</strong> RS." + netAmountPayable + "</p>")
document.write("<p><strong>Late Payment Surcharge:</strong> RS." + latePaymentSurcharge + "</p>")
document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> RS." + grossAmountPayable + "</p>")