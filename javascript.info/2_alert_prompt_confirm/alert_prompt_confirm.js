"use strict";

let userName = prompt("What is your name?", "");

alert(`Hello ${userName}! My name is Steve.`);

const header = document.querySelector("#header");

header.textContent = userName;