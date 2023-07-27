//* Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (firstNum, secondNum, operator) => {
    if(typeof firstNum  !== "number") return "provide valid first number";
    if(typeof secondNum !== "number") return "provide valid second number";

    switch(operator){
        case "+": 
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*": 
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
        default:
            return "enter valid operator (+,-,*,/) "
    }
}

const result = calculator(10,3, "-");
console.log("🚀 ~ file: calculator.js:22 ~ result:", result)
