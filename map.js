// 2️⃣ map

// ✅ Definition:
// map transforms each element in an array and returns a new array of same length.

console.log("\n=== map Examples ===");

// Example 1: Square numbers
const nums = [1, 2, 3, 4];
const squares = nums.map(num => num*2);
console.log("Squares:", squares);

// Example 2: Extract names from objects
const users = [
  { name: "Alice", age: 22, gender: "female" },
  { name: "Bob", age: 25, gender: "male" },
  { name: "Charlie", age: 30, gender: "other" }
];
const userNames = users.map(user => `${user.name} ${user.age}`);
console.log("User Names:", userNames);

// Example 3: Convert words to uppercase
const words = ["mohit","ShivaM",'SUJal'];
const upperWords = words.map(word => word.toUpperCase());
console.log("Uppercase Words:", upperWords);

// Real-Time Example: Create HTML list items from users
const userListHtml = users.map(user => `${user.name} : ${user.gender}`);
console.log("HTML List Items:", userListHtml);