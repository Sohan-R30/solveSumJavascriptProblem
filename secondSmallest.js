//* Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const secondSmallest = (numbers) => {
    let smallest = numbers[0];

    for(const num of numbers){
        if(smallest > num){
            smallest = num;
        }
    }
    
    const newNumbersArr = numbers.filter((number) => number !== smallest)

    let secondSmallest = newNumbersArr[0];
    
    for(const num of newNumbersArr){
        if(secondSmallest > num){
            secondSmallest = num;
        }
    }

    return secondSmallest
}
const secondSmallestNumber = secondSmallest([23,234,99,2,52,9,18])
console.log("🚀 ~ file: secondSmallest.js:25 ~ secondSmallestNumber:", secondSmallestNumber)
