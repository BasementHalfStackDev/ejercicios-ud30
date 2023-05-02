// Welcomes user
console.log("Hello world!")
console.log("I'm the ninth script!")

// Fuciton to check if text is composed of upper, lowercase or mixed letters
const analyseString = (text) => {
    let length = text.length
    let uppercount = 0;
    let lowercount = 0;

    for(let letter of text){
        if(letter === letter.toUpperCase()){
            uppercount++;
        } else if (letter === letter.toLowerCase()){
            lowercount++;
        }
    }

    if(uppercount === length) {
        return "The word is composed of all uppercase letters";
    } else if (lowercount === length) {
        return "The word is composed of all lowercase letters";
    } else {
        return "The word is a mix of upper and lowercase letters";
    }

}

// Asks the user and prints result
window.alert(analyseString(prompt("Enter a word")));