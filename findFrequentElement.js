//* Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

const frequentElement = (arr) => {
  let frequentNumberCount = 0;
  let frequentNumber;
  for (const i of arr) {
    const filterSameNum = arr.filter(singleArr => singleArr === i);
    if(frequentNumberCount < filterSameNum.length){
        frequentNumberCount = filterSameNum.length;
        frequentNumber = i;
    }
  }
  return `the most frequent element ${frequentNumber} and it has ${frequentNumberCount} times`
}

const frequentNumber = frequentElement( [3, 5, 2, 5, 3, 3, 1, 4, 5]);
console.log("🚀 ~ file: findFrequentElement.js:17 ~ frequentNumber:", frequentNumber)
