console.log("Hello world!")
console.log("I'm the fourth script!")

// Create array
let values = [true, 5, false, "hello", "bye", 2];

// Find string values
let stringValue = "";
for (value of values){
    // If value is string and bigger than current string, save to variable
    if (typeof value === "string" && value > stringValue){
        stringValue = value;
    }
}

// Print biggest string
console.log(stringValue);

// Find and print booleans
for (value of values){
    
    if (typeof value === "boolean"){
        console.log(value);
    }
}

// Initialise variables
let v1;
let v2;
let intcount = 0;

// Check for the two int values and store them
for (value of values){
    if (typeof value === "number"){
        if (intcount === 0) {
            v1 = value;
            intcount++;
        } else if (intcount === 1) {
            v2 = value;
            intcount++;
        }
    }
}

// Print all the operations with the two values
console.log(v1 + " + " + v2 + " = " + (v1+v2));
console.log(v1 + " - " + v2 + " = " + (v1-v2));
console.log(v1 + " * " + v2 + " = " + (v1*v2));
console.log(v1 + " / " + v2 + " = " + (v1/v2));
console.log(v1 + " % " + v2 + " = " + (v1%v2));
