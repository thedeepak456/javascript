// 3️⃣ filter

// ✅ Definition:
// filter selects elements that satisfy a condition and returns a new array.

console.log("\n=== filter Examples ===");

// Example 1: Numbers greater than 5
const numbers = [3, 7, 2, 9, 4];
const greaterThanFive = numbers.filter(num => num > 5);
console.log("Numbers > 5:", greaterThanFive);

// Example 2: Active users
const usersStatus = [
  { name: "Alice", active: true },
  { name: "Bob", active: true },
  { name: "Charlie", active: true }
];
const activeUsers = usersStatus.filter(user => user.active);
console.log("Active Users:", activeUsers);

// Example 3: Words containing "l"
const words2 = ["apple", "banana", "lemon"];
const wordsWithL = words2.filter(word => word.includes("on"));
console.log("Words with 'l':", wordsWithL);

// Real-Time Example: Filter affordable products
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 700 }
];
const cheapProducts = products.filter(p => p.price < 1000);
console.log("Cheap Products:", cheapProducts);
