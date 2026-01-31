// 1️⃣ forEach

// ✅ Definition:
// forEach executes a function for each element of an array.
// It does NOT return a new array. Mainly used for performing actions.

console.log("=== forEach Examples ===");

// Example 1: Print each fruit
const fruits = ["apple", "banana", "mango"];
fruits.forEach(fruit => console.log("Fruit:", fruit));

// Example 2: Print index and value
fruits.forEach((fruit, index) => console.log(`Index ${index}: ${fruit}`));

// Example 3: Concatenate all fruits into a string
let fruitString = "";
fruits.forEach(fruit => fruitString += fruit + " ");
console.log("Fruit String:", fruitString.trim());

// // Real-Time Example: Simulate adding event listeners to buttons
// const buttons = ["Btn1", "Btn2", "Btn3"];
// buttons.forEach((btn, index) => console.log(`Event listener added to ${btn}`));
