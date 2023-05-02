// Welcomes user
console.log("Hello world!")
console.log("I'm the eighth script!")

// Fuciton to check if number is even
const isEven = (n) => {
    if (n % 2 === 0) {
        return n + " is even";
    } else {
        return  n + " is odd";
    }
}

// Asks the user and prints result
console.log(isEven(prompt("Enter a number")));