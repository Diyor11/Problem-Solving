function quicksort(arr) {
  if (arr.length < 2) return arr

  const pivot = arr[Math.floor(arr.length / 2)]

  const less = []
  const equal = []
  const greater = []

  for (let i of arr) {
    if (i === pivot) {
      equal.push(i)
      continue
    }

    if (i < pivot) {
      less.push(i)
      continue
    }
    greater.push(i)
  }

  return [...quicksort(less), ...equal, ...quicksort(greater)]
}

const unsortedArray = [5, 2, 9, 1, 3]
const sortedArray = quicksort(unsortedArray)

console.log(sortedArray)
