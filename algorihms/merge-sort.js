function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  // Recursively sort the two halves
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight)
}

function merge(left, right) { // 2,4,  3  
  let result = [] // 2, 3
  let leftIndex = 0 // 1
  let rightIndex = 0 // 

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }

  // Concatenate the remaining elements
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const array = [1,2, 101, 15, 16];
console.log(mergeSort(array));

