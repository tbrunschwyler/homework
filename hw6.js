// CA 276 Homework 6

// DOM Access

// Instructions: Using document.querySelectorAll and CSS selectors, obtain references to the following
// DOM nodes. I've already written calls to document.querySelectorAll(). You just have to fill in the
// CSS selector.

// If you get stuck use this page as a guide: http://www.w3.org/TR/css3-selectors/#selectors

// All LI elements

console.log(document.querySelectorAll('li'));

// All LI elements that are the descendants of an OL element

console.log(document.querySelectorAll('ol li'));

// All elements with the class name "highlight"

console.log(document.querySelectorAll('.highlight'));

// Any element under a form tag (hint: the asterisk is the wild card in CSS)

console.log(document.querySelectorAll('form *'));

// All elements with the IDs "movies", "companies", or "fast_food" 
// (hint: use the comma to separate selectors)

console.log(document.querySelectorAll('#movies, #companies, #fast_food'));

// All elements that have an ID attribute

console.log(document.querySelectorAll('[id]'));

// All elements that have an ID attribute that ends with the letter "s"

console.log(document.querySelectorAll('[id$="s"]'));

// The first child LI element of all lists, ordered or unordered

console.log(document.querySelectorAll('ol li:first-child, ul li:first-child'));

// The second child LI element of all lists, ordered or unordered

console.log(document.querySelectorAll('ol li:nth-child(2), ul li:nth-child(2)'));

// All elements that are empty

//JG: The asterisk doesn't hurt, but you can safely leave it off
console.log(document.querySelectorAll(':empty'));

// All elements that are checked

//JG: Same as the previous one
console.log(document.querySelectorAll(':checked'));

// All radio buttons

console.log(document.querySelectorAll('[type=radio]'));

// All radio buttons that are checked

console.log(document.querySelectorAll('[type=radio]:checked'));

// All TDs that represent the 2nd column in the table with ID "names"

console.log(document.querySelectorAll('#names td:nth-child(2)'));

// All elements with the class name "hidden" that are not form elements

console.log(document.querySelectorAll('.hidden:not(form)'));

// All even TRs that are descendants of a TBODY

console.log(document.querySelectorAll("tbody tr:nth-child(even)"));

// All odd TRs that are descendants of a TBODY

console.log(document.querySelectorAll("tbody tr:nth-child(odd)"));


// OPTIONAL: Using what you know about arrays and accessing the DOM, write a function 
// that sorts the table with the ID "names". Your sort order will be ascending alphabetical 
// by last name. There are several ways to solve this. Below is an explanation of the logic for 
// one possible solution (feel free to skip this if you want to try out your own own algorithm):

// 1) append a new TBODY to the table (it is possible to have two TBODY tags in TABLE)
// 2) loop through all of the TR elements
// 3) insert each TR into the new TBODY. 
// 4) SORT LOGIC: During the loop you will need to place the new TR before the first TR 
// with a value greater than itself. If you were trying to insert the row with the last name “Boop” 
// into the TBODY below

/*
<tbody>
	<tr>
		<td>1</td>
		<td>John</td>
		<td>Doe</td>
	</tr>
</tbody>

the new row would go before it.

<tbody>
	<tr>
		<td>2</td>
		<td>Betty</td>
		<td>Boop</td>
	</tr>
	<tr>
		<td>1</td>
		<td>John</td>
		<td>Doe</td>
	</tr>
</tbody>
*/

// This technique is referred to as the Bubble sort. The rows with the highest values will 
// "bubble" towards the end.

// 5) Remove the empty TBODY element from the DOM tree.