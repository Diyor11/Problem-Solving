function removeElement(nums, val) {
  let k = 0 // Number of elements not equal to val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // nums[k] = nums[i]
      k++
    }
  }

  return k
}

// function removeElement(nums, val) {
//   const fileter = nums.filter((item) => item !== val)
//   return fileter.length
// }

const arr = [0,1,2,2,3,0,4,2]
console.log(removeElement(arr, 3))
