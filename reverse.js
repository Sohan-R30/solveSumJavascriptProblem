//* Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const reverseFn = (text) => {

    let reversedTextArray = [];

    const inputTextArray = text.split("");

    for (let i = inputTextArray.length - 1; i >= 0; i--) {
        reversedTextArray.push(inputTextArray[i])
    }

    const reversedText = reversedTextArray.join("");

    return reversedText;
}

const reversedText = reverseFn("Md. Zahidul Islam Shohan");
console.log("🚀 ~ file: reverse.js:19 ~ reversedText:", reversedText)
