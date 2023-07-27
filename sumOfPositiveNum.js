//*  Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const sumOfPositiveNum = (numbers) => {
    let sum = 0;

    for (const i of numbers) {
       if(i >= 0){
        sum += i
       }
    }
    
    return sum;
}

const sum = sumOfPositiveNum([2, -5, 10, -3, 7]);
console.log("🚀 ~ file: sumOfPositiveNum.js:16 ~ sum:", sum)