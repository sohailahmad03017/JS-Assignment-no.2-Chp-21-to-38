document.write("<h1 align = 'center' > Chapters : 31 to 34");

// 1. Write a program that displays current date and time in
// your browser.
document.write("<h2> Question no.1 </h2>");
document.write(new Date());

// 2. Write a program that alerts the current month in words.
// For example December.
document.write("<h2> Question no.2 </h2>");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentDate = new Date();
document.write("Current month: <strong>" + months[currentDate.getMonth()] + "</strong>");

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
document.write("<h2> Question no.3 </h2>");
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
document.write("Today is " + days[currentDate.getDay()]);

// 4. Write a program that displays a message “It’s Fun day” if
// // its Saturday or Sunday today.
document.write("<h2> Question no.4 </h2>");
if(currentDate.getDay() == "0" || currentDate.getDay() == "6"){
    document.write("It's Fun day.");
}
else{
    document.write("It's not Fun day.");
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
document.write("<h2> Question no.5 </h2>");
if(currentDate.getDate() < 16){
    document.write("First fifteen days of the month.");
}
else{
    document.write("Last days of the month.");
}

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
document.write("<h2> Question no.6 </h2>");
document.write("Current Date: " + currentDate);
document.write("<br> Ellapsed milliseconds since January 1, 1970: " + currentDate.getTime());
document.write("<br> Ellapsed minutes since January 1, 1970: " + (currentDate.getTime() / (1000 * 60) ));

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
document.write("<h2> Question no.7 </h2>");
if(currentDate.getHours() < 12){
    alert("It's AM");
    document.write("It's AM");
}
else{
    alert("It's PM");
    document.write("It's PM");
}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
document.write("<h2> Question no.8 </h2>");
var laterDate = new Date("December 31, 2020");
document.write("Later Date: " + laterDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
document.write("<h2> Question no.9 </h2>");
var firstRamd = new Date("June 18, 2015");
var noOfDays = (currentDate.getTime() - firstRamd.getTime()) / (1000 * 60 * 60 * 24 );
noOfDays = Math.floor(noOfDays);
document.write(noOfDays + " days have passed since 1st Ramadan, 2015");

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
document.write("<h2> Question no.10 </h2>");
var beginning2015 = new Date("January 1, 2015");
var passedSeconds = (currentDate.getTime() - beginning2015.getTime()) / 1000;
passedSeconds = Math.floor(passedSeconds);
document.write("On reference date " + currentDate + ", " + passedSeconds + " seconds has passed since beginning of 2015.");

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
document.write("<h2> Question no.11 </h2>");
var currentDate1 = new Date();
var oneHourAgo = currentDate1.getHours() - 1;
var oneHourAgo = oneHourAgo.toString();
currentDate1.setHours(oneHourAgo);
document.write("Current date: " + currentDate + "<br> 1 hour ago, it was " + currentDate1);

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
document.write("<h2> Question no.12 </h2>");
var currentDate2 = new Date();
var hundredYearsAgo = currentDate.getFullYear() - 100;
hundredYearsAgo = hundredYearsAgo.toString();
currentDate2.setFullYear(hundredYearsAgo);
document.write("Current date: " + currentDate + "<br> 100 years back, it was " + currentDate2);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
document.write("<h2> Question no.13 </h2>");
var userAge = prompt("Please, Enter your age.");
var birthYear = currentDate.getFullYear() - userAge;
document.write("Your age is : " + userAge  + "<br> Your birth year is " + birthYear);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
document.write("<h2> Question no.14 </h2>");
document.write("<h1> K-Electric Bill </h1>");
var customerName = "Sohail Ahmad";
var month = months[currentDate.getMonth()];
var noOfUnits = 410;
var chargesPerUnit = 16;
var latePaySurCharge = 350;

document.write("Customer Name: <strong>" + customerName + "</strong>");
document.write("<br> Month: <strong>" + month + "</strong> <br>");
document.write("No of units: <b>" + noOfUnits + "</b> <br>");
document.write("Charges per unit: <b>" + chargesPerUnit + "</b> <br><br>");
document.write("Net Amount Payable (within Due Date): <b> " + noOfUnits * chargesPerUnit + "</b> <br>");
document.write("Late Payment Surcharge: <b>" + latePaySurCharge + "</b> <br>");
document.write("Gross Amount Payable (after Due Date): <b>" + ((noOfUnits * chargesPerUnit) + latePaySurCharge) + "</b>");

