// Welcomes user
console.log("Hello world!")
console.log("I'm the sixth script!")

// DNI Letter array
let letters = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", 
"J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T",];

// Asks dni number till valid
let dniNum = 0;
while (dniNum <= 0 || dniNum > 99999999) {
    dniNum = parseInt(prompt("Enter your DNI numbers"));
    if (dniNum <= 0 || dniNum > 99999999) {
        window.alert("Please insert a valid DNI number.");
    }
}

// Asks for dni letter
let dniLetter = prompt("Insert your DNI letter").toUpperCase;

// Calculates array index
let index = dniNum % 23;

// Gets letter from array
let letter = letters[index];

// Compares input letter with calculated letter
if (letter != dniLetter) {
    window.alert("The indicated letter is not correct.");
} else {
    window.alert("The DNI number and letter are correct.");
}