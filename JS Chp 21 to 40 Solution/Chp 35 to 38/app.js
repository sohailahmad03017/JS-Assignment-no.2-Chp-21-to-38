document.write("<h1 align = 'center'> Chapters: 35 to 38 </h1>");

// 1. Write a function that displays current date & time in your
// browser.
document.write("<h2> Question no.1 </h2>");

function currentDate(){
    document.write(new Date());
}

currentDate();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
document.write("<h2> Question no.2 </h2>");
var fname = prompt("Please, Enter your first name.", "Sohail");
var lname = prompt("Please, Enter your last name.", "Ahmad");

function greet(first, last){
    document.write("Hello! <b>" + first + " " + last + "</b> Welcome to our Website.")
}

greet(fname, lname);

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
document.write("<h2> Question no.3 </h2>");
var num1 = prompt("Please, Enter the first number.");
num1 = +num1;
var num2 = prompt("Please, Enter the second number.");
num2 = +num2;

function sum(first, second){
    var sum = first + second;
    return sum;
}
var sum = sum(num1, num2);

document.write("The sum of " + num1 + " and " + num2 + " is <b>" + sum +  "</b>");

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
document.write("<h2> Question no.4 </h2>");
document.write("<h1> Calculator </h1>");
var numb1 = prompt("Please, Enter the first number.");
numb1 = +numb1;
var numb2 = prompt("Please, Enter the second number.");
numb2 = +numb2;
var operation = prompt("Please Enter the operation (+ , - , * , / , % )", "*");

function calculator(num1, num2, operation) {
    switch (operation) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        case "%":
            return num1 % num2;
            break;
        default:
            return "Enter a valid operation."
    }
}
document.write("<b> Result: </b> " + calculator(numb1, numb2, operation));

// 5. Write a function that squares its argument.
document.write("<h2> Question no.5 </h2>");
function square(num){
    document.write("Square of <b>" + num + "</b> is : <b>" + num * num + "</b>" );
}
var num3 = prompt("Please, Enter a number whose square is required.");
square(num3);

// 6. Write a function that computes factorial of a number.
document.write("<h2> Question no.6 </h2>");
var n = prompt("Please, Enter the number whose Factorial is required");
n = +n;

function factorial(n){
    var fact = 1;
    for(var i = n; i > 1; i--){
        fact = fact * i;
    }
    return fact;
}

document.write("Factorial of " + n + " is " + factorial(n));

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
document.write("<h2> Question no.7 </h2>");
var start = prompt("For counting, Please enter the starting number.");
start = +start;
var last = prompt("For counting, Please Enter the last number.");
last = +last;
function counting(start, end){
    document.write("<b> Counting from " + start + " to " + end + " is given below. </b> <br><br>" );
    for(var i = start; i <= end; i++){
        document.write(i + " " + " ");
    }
}

counting(start, last);

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle. 
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
document.write("<h2> Question no.8 </h2>");
var base = prompt("Please, Enter the base.");
base = +base;
var per = prompt("Please, Enter the value of the perpendicular.");
per = +per;

function calculateHypotenuse(base, per){
    
    function calculateSquare(num){
        return num * num;   
    }
    var base2 = calculateSquare(base);
    var per2 = calculateSquare(per);

    document.write("The Hypotenuse of the triangle is: " + Math.sqrt(base2 + per2));
}

calculateHypotenuse(base, per);

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
document.write("<h2> Question no.9 </h2>");
var width = prompt("Enter the width of rectangle.");
width = +width;
var height = prompt("Enter the height of rectangle.");
height = +height;

function area(width, height){
    document.write("If the width of the rectangle is " + width + "m and height is " + height + "m, then the area of this rectangle is " + width * height + "m<sup>2</sup>. <br><br>");
}

area(4, 5);
area(width, height);


// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
document.write("<h2> Question no.10 </h2>");
var text1 = prompt("Enter a string to check wether it is a Palindrome or not.");
text1 = text1.toLowerCase();

function palindrome(text){
    var reverse = [];
    var j = 0;
    for(var i = text.length; i >= 1; i-- ){
        reverse[j] = text[i-1]; 
        j++;
    }
    reverse = reverse.join("");
    
    if(reverse == text){
        document.write("The passed string is a Palindrome.");
    }
    else{
        document.write("The passed string is not a Palindrome.");
    }
}

palindrome(text1);

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
document.write("<h2> Question no.11 </h2>");
var text2 = prompt("Enter a string, then I will convert that in title case.");

function titleCase(text){
    text = text.split(" ");

    var titleCase = [];
    
    for(var i = 0; i < text.length; i++){

        var firstLett = text[i].slice(0,1);
        firstLett = firstLett.toUpperCase();
        var other = text[i].slice(1)
        other = other.toLowerCase();

        titleCase[i] = firstLett + other;
    }

    titleCase = titleCase.join(" ");
    document.write(titleCase);
}
titleCase(text2);

// // 12. Write a JavaScript function that accepts a string as a
// // parameter and find the longest word within the string.
// // EXAMPLE STRING : 'Web Development Tutorial'
// // EXPECTED OUTPUT : 'Development'
document.write("<h2> Question no.12 </h2>");
var text3 = prompt("Enter a string, then I will tell the longest word in that string. ");

function longestWordChecker(text){
    var text = text.split(" ");
    var wordLen = 0;
    var longestWord;
    for(var i = 0; i < text.length; i++){
        if(text[i].length > wordLen){
            wordLen = text[i].length;
            longestWord = text[i];
        }
    }

    document.write("In the given string the longest word is: " + longestWord);
}
longestWordChecker(text3);

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
document.write("<h2> Question no.13 </h2>");
var text4 = prompt("Please, Enter a string.");
text4 = text4.toLowerCase();
var char = prompt("Enter character whose occurence is required.");

function occurenceChecker(text, char){
    var occurence = 0;
    for(var i = 0; i < text.length; i++){
        if(text[i] === char){
            occurence++;
        }
    }
    document.write("The character <b>" + char + "</b> occurs " + occurence + " times.");
}
occurenceChecker(text4, char);

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
document.write("<h2> Question no.14 </h2>");
document.write("<h1> The Geometrizer </h1>");

function calcCircumference(r){
    document.write("The circumference of the circle having radius " + r + "m is: " + Math.round(2 * Math.PI * r) + "m.<br><br>");
}
function calcArea(r){
    document.write("The area of the circle having radius "+ r + "m is: " + Math.round(2 * Math.PI * r * r) + "m<sup>2<sup>.");
}
calcCircumference(3);
calcArea(3);








