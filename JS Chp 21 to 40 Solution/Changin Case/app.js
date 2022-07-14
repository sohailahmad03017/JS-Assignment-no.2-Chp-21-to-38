                    // Changing Case

// 1. Write a program that takes user input. Convert and show the input
// in capital letters.
document.write("<h1>Changing Case</h1>");
document.write("<h2> Question no.1 </h2>");
var name = prompt("Please, Enter your name.");
name = name.toUpperCase();
document.write(name);

// 2. Write a program that takes user input. Convert and show the
// input in title case
document.write("<h2>Question no.2 </h2>");
var titleCase = prompt("Please Enter your input, then I will convert that in title case");
var firstChar = titleCase.charAt(0);
firstChar = firstChar.toUpperCase();
var otherChars = titleCase.slice(1);
otherChars = otherChars.toLowerCase();
titleCase = firstChar + otherChars;
document.write(titleCase);


            // Strings: measuring length and extracting parts

document.write("<h1> String: Measuring Length and Extracting Parts </h1> ");            
// 1. Write a program to take a user input about his favorite mobile
// phone model. Find and display the length of user input in your
// browser
document.write("<h2> Question no.1 </h2>");
var favMob = prompt("Please, Enter the name of your favorite Mobile Phone Model.");
document.write("The length is : <b> " + favMob.length + "</b>" );

// 2. Write a program to display the last character of a user input.
document.write("<h2> Question no.2 </h2>");
var userInput = prompt("Please, Enter the string whose last character is required.");
document.write("The last character of the user input is <b>" + userInput[userInput.length - 1] + "</b>");


                    // Strings: finding segments
                    
 document.write("<h1> Strings: Finding Segments </h1>");
 // 1. Write a program to find the index of letter “n” in the word “Pakistani”
 // and display the result in your browser.
 var word = "Pakistani"
 document.write("<h2> Question no.1 </h2>");
 document.write("The index of letter <strong> 'n' </strong> in the word <strong> 'Pakistani' </strong> is : " + word.indexOf('n'));

//  2. Write a program to take user input and store username in a
//  variable. If the username contains any special symbol among (@ . ,
//  !), prompt the user to enter a valid username.
document.write("<h2> Question no.2 </h2>");
var userName = prompt("Please, Enter your name excluding special symbols : (@ . , !");
var flag = 0;
for(var i = 0; i < userName.length; i++){
    if(userName[i] == "@" || userName[i] == "," || userName[i] == "!" || userName[i] == "."){
        flag = 1;
    }
}
if(flag == 1){
    userName = prompt("Please, Enter a valid Username.")
} 

// 3. You have a string “The quick brown fox jumps over the lazy
// dog”. Write a program to count number of occurrences of word “the”
// in given string.    
document.write("<h2> Question no.3 </h2>");
var text = "The quick brown fox jumps over the lazy dog.";
text = text.toLowerCase();
count = 0;
for(var i = 0; i < text.length; i++){
    if(text.slice(i, i+3) == "the"){
        count++;
    }
}
document.write("The number of occurence of the word  <strong> 'the' </strong> in given string is/are : <strong> " + count + "</strong>");    

                // Strings: finding a character at a location
                
document.write("<h1> Strings: Finding a character at a location. </h1>");
// 1. Write a program to find the character at 3rd index in the word
// “Pakistani” and display the result in your browser.      
var pakistani = "Pakistani";
document.write("The character at the 3rd index in the word 'Pakistani' is : " + pakistani.charAt(2));

                
                    // Strings: replacing characters

document.write("<h1> Strings: Replacing Characters </h1>")
// 1. Write a program to replace the “Hyder” to “Islam” in the word
// “Hyderabad” and display the result in your browser.
document.write("<h2> Question no.1 </h2>");
var hyderabad = "Hyderabad";
document.write("<h2> Question no.1 </h2>");
document.write("The result after replacement is <strong>" + hyderabad.replace("Hyder", "Islam") + "</strong>");

// 2. Write a program to replace all occurrences of “and” in the string
// with “&” and display the result in your browser.
document.write("<h2> Question no.2 </h2>");
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("<b> The output after replacement is : </b> <br> " + message.replace(/and/g, "&"));


                                // Rounding numbers

  document.write("<h1 align = 'center' > Rounding Numbers </h1>");
  // 1. Write a program that takes a positive integer from user & display
  // the following in your browser.
  // a. number (example number: 3.45214)
  // b. round off value of the number
  // c. floor value of the number
  // d. ceil value of the number
  document.write("<h2> Question no.1 </h2>");
  var posNum = prompt("Please, Enter a positive number.");
  document.write("The round of value of " + posNum + " is : " + Math.round(posNum));
  document.write("<br><br> The floor of the "+ posNum + " is " + Math.floor(posNum) );
  document.write("<br><br> The ceil of the "+ posNum + " is " + Math.ceil(posNum) );

// 2. Write a program that takes a negative floating point number
// from user & display the following in your browser.
// a. Number (example number: -2.678 )
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
document.write("<h2> Question no.2 </h2>");
var negNum = prompt("Please, Enter a negative number.");
document.write("The round of value of " + negNum + " is : " + Math.round(negNum));
document.write("<br><br> The floor of the "+ negNum + " is " + Math.floor(negNum) );
document.write("<br><br> The ceil of the "+ negNum + " is " + Math.ceil(negNum) );

                    // Generating random numbers

document.write("<h1 align = 'center' > Generating random numbers </h1>");
// 1. Write a program that simulates a dice using random() method of JS
// Math class. Display the value of dice in your browser.
document.write("<h2> Question no.1 </h2>")
document.write("Now I am going to print the values of dice 10 times.");
for(var i = 0; i < 10; i++){
    var randomNum = Math.random();
    var dice = (randomNum * 6) + 1;
    document.write("<br> " + Math.floor(dice) + "<br>");
}

// 2. Write a program that simulates a coin toss using random() method
// of JS Math class. Display the value of coin in your browser.
// 2 = Heads and 1 = Tails
document.write("<h2> Question no.2 </h2>");
document.write("Now I am going to print the result of toss 5 times.");
for(var i = 0; i < 5; i++){
    var toss = (Math.random() * 2) + 1;
    document.write("<br>" + Math.floor(toss) + "<br>");
}

// 3. Write a program that stores a random secret number from 1 to 10 in a
// variable. Ask the user to input a number between 1 and 10. If the user input
// equals the secret number, congratulate the user.
document.write("<h2> Question no.3 </h2>");
var secretNo = (Math.random() * 10) + 1;
secretNo = Math.floor(secretNo);
var userInputNo = prompt("I have a secret number between 1 and 10. \n Please input a number between 1 and 10");
userInputNo = +userInputNo;
if(userInputNo === secretNo){
    document.write("Congratulations! You have guessed the right number.");
}
else{
    document.write("Sorry! You have guessed the wrong number. Try Again");
}

                // Converting strings to integers and decimals

document.write("<h1> Converting strings to Integers and Decimals </h1> ");           
// 1. Write a program that asks the user about his weight. Parse the user
// input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
document.write("<h2> Question no.1 </h2>");
var weight = prompt("Please, Enter your Age.");
document.write("Your weight (Integer) is : " + parseInt(weight));
document.write(" <br> Your weight (Decimal)) is : " + parseFloat(weight));

            // Converting strings to numbers, numbers to strings
            
document.write("<h1 align = 'center' > Converting strings to numbers, numbers to strings");
// 1. Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.
// Hint: (use typeof())
document.write("<h2> Question no.1 </h2>");
var string1 = "472";
var num1 = Number(string1);
document.write("Before conversion the value is : <strong>" + string1 + "</strong> and its type is : <strong>" + typeof string1 + "</strong> <br><br>");
document.write("After conversion the result is : <strong>" + num1 + "</strong> and its type is : <strong>" + typeof num1 + "</strong>");

// 2. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
document.write("<h2> Question no.2 </h2>");
var num2 = 35.36;
num2 = num2 * 100;
var string2 = num2.toString();
document.write("Before conversion the value is : <b>" + num2 + "</b>");
document.write("<br><br> After conversion the result is :<b> " + string2 + "</b> and its data type is : <b>" + typeof string2 + "</b>");


                // Controlling the length of decimals
                
document.write("<h1 align = 'center' > Controlling the length of decimals </h1>");
// 1. Write a program to control the length of decimals to 2.
// var percentage = 30 / 45 * 100; -> 66.666666666666
document.write("<h2> Question no.1 </h2>");
var percentage = (30 / 45) * 100;
document.write("Before controlling the length of decimals the value is : <b>" + percentage + "</b> <br><br> After controlling the length of decimal the result is : <b>" + percentage.toFixed(2) + "</b>");


