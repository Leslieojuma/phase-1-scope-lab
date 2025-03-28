// Declare a variable in global scope called customerName
var customerName = 'bob';

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to declare a global variable bestCustomer and assign it 'not bob'
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declares a global variable
}

// Function to overwrite the global bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare a constant in global scope called leastFavoriteCustomer
const leastFavoriteCustomer = 'initial value';

// Function to attempt to change the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value'; // This will throw an error
}
