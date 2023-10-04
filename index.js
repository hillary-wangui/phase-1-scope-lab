// Write your solution in this file!
// Declare customerName to be "bob" in the global scope
var customerName = "bob";

// 1) Return the customerName
function CustomerName() {
  return customerName;
}

// 2) Modify the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3) Set the bestCustomer variable
function setBestCustomer() {
  bestCustomer = "not bob";
}

// 4) Overwrite the best customer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Initialize the bestCustomer variable outside any function
var bestCustomer;

// 5) Attempt to reassign the leastFavoriteCustomer variable
function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = "john";
  // Attempt to reassign the variable (unsuccessfully)
  leastFavoriteCustomer = "alice"; // This will throw an error
}

// Example usage:
console.log(returnCustomerName()); // Output: "bob"
upperCaseCustomerName();
console.log(returnCustomerName()); // Output: "BOB"
setBestCustomer();
console.log(bestCustomer); // Output: "not bob"
overwriteBestCustomer();
console.log(bestCustomer); // Output: "maybe bob"
changeLeastFavoriteCustomer(); // This will throw an error
