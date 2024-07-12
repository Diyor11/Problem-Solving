function bubbleSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return arr;
}

const unsortedArray = [5, 2, 9, 3] // [2,3,5,9]
const sortedArray = bubbleSort(unsortedArray)

console.log(sortedArray) // Output: [1, 2, 3, 5, 9]
