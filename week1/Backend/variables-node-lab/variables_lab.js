var age = 25;

if (age > 18) {
    var status = "Adult";
    console.log("Status:", status);
}

// Uncomment the following line to see is 'status' is accessible or not
console.log("Status outside block:", status);

const birthYear = 1998;
// Uncomment the following line to see that reassignment will result in an error
birthYear = 2000; // YES, there is an error (TypeError: Assignment to constant variable.)
console.log("Birth Year:", birthYear);