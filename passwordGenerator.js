//* Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const randomLowerCase = (letters, randomPassword) => {
    randomPassword.push(letters[Math.ceil(Math.random(letters.length) * (letters.length - 0 - 1) + 0)])
}
const randomUpperCase = (letters, randomPassword) => {
    randomPassword.push(letters[Math.ceil(Math.random(letters.length) * (letters.length - 0 - 1) + 0)].toUpperCase())
}
const randomNumber = (randomPassword) => {
    randomPassword.push(Math.floor(Math.random() * 10))
}
const randomSpecialChar = (specialChar, randomPassword) => {
    randomPassword.push(specialChar[Math.ceil(Math.random(specialChar.length) * (specialChar.length - 0 - 1) + 0)])
}

const randomlyChooseFunction = (letters,specialChar,randomPassword) => {
    const randomNum = Math.floor(Math.random() * 4)
    randomNum === 0 ? randomLowerCase(letters, randomPassword) 
    : randomNum === 1 ? randomUpperCase(letters, randomPassword)
    : randomNum === 2 ? randomNumber(randomPassword)
    : randomNum === 3 ?  randomSpecialChar(specialChar, randomPassword) :  randomNumber(randomPassword)
}

const generatePassword = (lenght) => {
    let randomPassword = []
    const letters = 'abcdefghijklmnopqrstwuvxyz'
    const specialChar = "!@#$&"
    for (let i = 1; i <= lenght; i++) {
        if (Math.ceil(lenght / 4) > i) {
            randomlyChooseFunction(letters,specialChar,randomPassword)
        }
        if (Math.ceil(lenght / 3) > i) {
            randomlyChooseFunction(letters,specialChar,randomPassword)
        }
        if (Math.ceil(lenght / 2) > i) {
            randomlyChooseFunction(letters,specialChar,randomPassword)
        }
        if (lenght === i) {
            randomlyChooseFunction(letters,specialChar,randomPassword)
        }
    }

    switch (lenght) {
        case 2:
            randomlyChooseFunction(letters,specialChar,randomPassword)
            break;
        case 3:
            randomlyChooseFunction(letters,specialChar,randomPassword)
            break;
        case 4:
            randomlyChooseFunction(letters,specialChar,randomPassword)
            break;
    }

    return randomPassword.join("")
}

const randomPass = generatePassword(5)
console.log("🚀 ~ file: passwordGenerator.js:59 ~ randomPass:", randomPass)