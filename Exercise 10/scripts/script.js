// Welcomes user
console.log("Hello world!")
console.log("I'm the tenth script!")

// Fuciton to check if text is a palindrome
const analyseString = (text) => {
    let length = text.length
    let coincidences = 0;

    for(let i = 0; i < length; i++){
        if(text[i] === text[length-i-1]){
            coincidences++;
        }
    }

    if(coincidences === length) {
        return "The word " + text + " is a palindrome";
    } else {
        return "The word " + text + " is not a palindrome"
    }
}

// Asks the user for a word and prints result
window.alert(analyseString(prompt("Enter a word")));