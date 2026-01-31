/*************************************************
 1. FUNCTION DECLARATION
 Definition: Uses the `function` keyword with a name.
 Hoisted – can be called before it is defined.
 Real-Time Example: Calculating total bill amount
*************************************************/

// Function call before declaration (hoisting works)
console.log("Total Bill:", calculateBill(500, 50));

function calculateBill(amount, tax) {
    return amount + tax;
}


/*************************************************
 2. FUNCTION EXPRESSION
 Definition: Function assigned to a variable.
 Not hoisted – must be defined before use.
 Real-Time Example: Login validation based on user role
*************************************************/

const validateLogin = function (role) {
    if (role === "admin") {
        return "Admin access granted";
    } else {
        return "User access granted";
    }
};

console.log(validateLogin("admin"));
console.log(validateLogin("user"));


/*************************************************
 3. ARROW FUNCTION
 Definition: Shorter syntax (ES6), no own `this`.
 Real-Time Example: Array operations (map)
*************************************************/

const prices = [100, 200, 300];

// Apply 10% discount using arrow function
const discountedPrices = prices.map(price => price * 0.9);

console.log("Discounted Prices:", discountedPrices);


/*************************************************
 4. ANONYMOUS FUNCTION
 Definition: Function without a name.
 Commonly used as a callback.
 Real-Time Example: Button click or timer
*************************************************/

// Timer example
setTimeout(function () {
    console.log("Order confirmation sent after 2 seconds");
}, 2000);
