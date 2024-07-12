const binerySearch = (arr, target) => {
  let left = 0, // 0
    right = arr.length - 1 // 1

  while (left <= right) {
    let mid = Math.floor((right + left) / 2) // [1, 2, 3, 4 ,5, ] 2
    console.log('work:') //              ^
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}

function binarySearchRecursion(arr, target) {
  if (arr.length === 0) {
    return -1 // Base case: target not found
  }

  const mid = Math.floor(arr.length / 2)

  if (arr[mid] === target) {
    return mid // Base case: target found
  }

  if (arr[mid] < target) {
    const result = binarySearchRecursion(arr.slice(mid + 1), target)
    return result !== -1 ? result + mid + 1 : -1
  } else {
    return binarySearchRecursion(arr.slice(0, mid), target)
  }
}

// Example usage:
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(binarySearchRecursion(data, 1))
