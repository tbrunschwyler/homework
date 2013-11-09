// Homework 5

// This homework assignment will give you practice working with the DOM.

// Review the code we wrote in class by going here:

// https://github.com/galdamez/ca276-fall2013/blob/master/week9/wk9.js

// You'll be able to derive all your answers from what is in this file.


// Problem 1

// Using the W3C functions document.createElement(), document.createTextNode(), 
// and document.body.appendChild(), append the following HTML to the page.

// <dl>
// 	<dt>Some word</dt>
// 	<dd>Some definition</dd>
// </dl>

// You'll have to use document.createElement() for each HTML element (i.e. tag).
// You'll have to use document.createTextNode() for anything that is just text.
// When you have your DOM nodes ready, call document.body.appendChild() to append
// to the end of the body element.

// Feel free to replace "Some word" and "Some definition" with text of your 
// choosing. If you need ideas check out http://wordsmith.org/words/random.cgi
var list, listTitle, listDef, word, definition;

//Assign Text to Text Nodes
word = document.createTextNode("Blatherskite");
definition = document.createTextNode("A person who blathers a lot");

//Create Elements
list = document.createElement('dl');
listTitle = document.createElement('dt');
listDef = document.createElement('dd');

//Append TextNodes to Appropriate Elements
listTitle.appendChild(word);
listDef.appendChild(definition);

//Append elements to leading element
list.appendChild(listTitle);
list.appendChild(listDef);

//Print to page
document.body.appendChild(list);


// Problem 2

// Do the same thing as problem 1 only insert your HTML using the innerHTML
// property of the DIV with id="definitions".
var definitionsDiv;


//Get appropriate div for insertion
definitionsDiv = document.getElementById('definitions');

//Insert

definitionsDiv.innerHTML += '<dl> <dt>Taffer</dt> <dd>A trickster or petty thief</dd> </dl>'; 

// Problem 3

// Do the same as Problem 2 only use the jQuery code we did in class. For 
// this problem you won't need to worry about setting up a click handler.
// Just worry about the code that does the text appending.

$('#definitions')
	.append('<dl> <dt>Hugger-Mugger</dt> <dd>Confused, Muddled, or Disorderly</dd> </dl>');