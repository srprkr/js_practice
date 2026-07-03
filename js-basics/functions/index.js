function greet(name, lastName = "Smith") {
  // Template literal
  console.log(`Hello ${name} ${lastName}`);
}

greet('John');
greet('Mary', 'Fullmer');