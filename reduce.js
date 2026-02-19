// 4️⃣ reduce

// ✅ Definition:
// reduce combines all elements into a single value (number, object, array, etc.).

console.log("\n=== reduce Examples ===");

// Example 1: Sum of numbers
const nums2 = [5, 10, 15,5];
const totalSum = nums2.reduce((acc, num) => acc + num, 0);
console.log("Total Sum:", totalSum);

// Example 2: Find maximum number
const nums3 = [4, 9, 2, 10];
const maxNum = nums3.reduce((a, b) => (a > b ? a : b));
console.log("Maximum Number:", maxNum);

// Example 3: Count occurrences of fruits
const fruits2 = ["apple", "banana", "apple", "mango", "banana"];
const fruitCount = fruits2.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log("Fruit Count:", fruitCount);

// Real-Time Example: Calculate cart total
const cartItems = [
  { name: "Book", price: 200, qty: 2 },
  { name: "Pen", price: 50, qty: 5 },
  { name: "Notebook", price: 100, qty: 3 }
];
const cartTotal = cartItems.reduce((total,  ) => total + item.price * item.qty, 0);
console.log("Cart Total:", cartTotal);
