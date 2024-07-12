function selectionSort(arr) {
  const length = arr.length
  for(let i = 0; i < length -1; i++) {
    let minIndex = i;

    for(let j = i + 1; j < length; j++) {
      if(arr[j] < arr[minIndex]) 
        minIndex = j
    }

    if(minIndex !== i) 
      ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  
  return arr
}
const array = [2, 3, 1, 5, 8, 6, 12, 100, 33, 11]

console.log(selectionSort(array))
