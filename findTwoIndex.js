//* Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findTwoIndex = (arr, targetValue) => {
    let firstNum;
    let secondNum;
    let sum;
    for (let i = 0; i < arr.length - 1; i++) {
        firstNum = arr[i];
        secondNum = arr[i + 1];
        sum = firstNum + secondNum;
        if (sum === targetValue) return [firstNum, secondNum]
    }

    if (sum !== targetValue) {
        for (let i = 0; i < arr.length - 1; i++) {
            firstNum = arr[i]
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[i] !== arr[j]) {
                    secondNum = arr[j]
                    sum = firstNum + secondNum;
                    if (sum === targetValue) return ([firstNum, secondNum])
                }
            }
        }
    }
}
const result = findTwoIndex([1, 3, 6, 8, 11, 15], 9);
console.log("🚀 ~ file: findTwoIndex.js:28 ~ result:", result)