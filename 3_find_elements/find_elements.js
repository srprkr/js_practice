"use strict";

// 1. get table with id "age-table"
let table = document.getElementById("age-table");

// 2. All label elements in that table
document.querySelectorAll('#age-table label')

// 3. the first td in that table with the word "Age:"
table.querySelector('td')

// 4. The for w/the name 'search'
let form = document.getElementsByName('search')[0];

// or
// document.querySelector('form[name="search"]')

// 5. first input of that form
form.querySelector('input')


console.log(table);
console.log(document.querySelectorAll('#age-table label'));
console.log(table.querySelector('td'));
console.log(form);
console.log(form.querySelector('input'));