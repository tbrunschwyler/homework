/*
 * Please follow the instructions carefully.
 * 
 * When a problem says "send 'foo' to the console that means you would write
 * 
 * 	console.log('foo');
 * 
 * I may also say "send the variable x to the console" in which case you'd write
 * 
 * 	console.log(x)
 * 
 * Note: If you have multiple variables x, y, z you can send all of them to the console like so
 * 
 * 	console.log(x, y, z)
 */

// Problem 1) Using JavaScript comments, write your name and today's date below
// Thomas Brunschwyler
// September, 18th, 2013

// Problem 2) Create separate variables to store the following. 
// Send all variables to the console.
	// Your e-mail address
	// Your major
	// Your favorite text editor
	// A zip code
	// The value of pi up to 5 decimal places (use Google to find the value)
	// The total cost of a 10 dollar book plus 5% sales tax
	// Whether or not the light switch is on
	// Whether or not Superman can fly

	var myEmail = 'tbrunschwyler@montgomerycollege.edu', 
	myMajor = 'Computer Science', 
	txtEditor = 'Open Office', 
	zipCode = 20896,
	pi =  3.14159,
	bookCost = 10.5,
	light = true,
	superman = true;

	console.log(myEmail, myMajor, txtEditor, zipCode, pi, bookCost, light, superman);


// Problem 3) Use the typeof operator to determine the data type of each variable like so.
	// console.log(typeof myEmail);
	// console.log(typeof myMajor);
	// and so on…
	// Make sure you have at least one string, at least one number, and at least one Boolean.

console.log(typeof myEmail, typeof myMajor, typeof txtEditor, typeof zipCode, typeof pi, typeof bookCost, typeof light, typeof superman);

// Problem 4) Create string variables to store the following string values.
// Send all variables to the console.
	// The dog's biting my shoes
	// <a href="#">Some link</a>
	// JavaScript is "easy" if you are good at it
	var helpPlease = 'The dog\'s biting my shoes',
	someLink =  '<a href=\"#\">Some link</a>',
	easyJavaS = 'JavaScript is \"easy\" if you are good at it';

	console.log(helpPlease, someLink, easyJavaS);

// Problem 5) Create an array of topics you would like to learn this semester.
// Send this array to the console.
	var topics = ['creating objects in JavaScript', 'reading and writing data', 'manipulating the gui or page style with javascript'];

	console.log(topics);	


// Problem 6) Send each item of the last array to the console. 
// If your array variable is myArray then you would write
	// console.log(myArray[0])
	// console.log(myArray[1])
	// and so on…
	console.log(topics[0]);	
	console.log(topics[1]);	
	console.log(topics[2]);	

// Problem 7) Use the yourArrayVariable.length property to determine the size of your array.
// Send the result to the console.
console.log(topics.length);

// Problem 8) Create a function named "clickMe".
// When the user clicks the button with the ID of "clickMe" send the string 
// "Leave me alone!" to the console.
	// hint: Use document.getElementById to get a reference to the button in
	// a similar way to how we did it in class for the currency conversion
	// calculator.

	function clickMe(){
		console.log('Leave me alone!');
	}

	document.getElementById('clickMe').onclick = clickMe;
