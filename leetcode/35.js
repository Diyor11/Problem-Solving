function searchInsert(nums, target) {
  let left = 0 // 1
  let right = nums.length - 1 // 0

  while (left <= right) {
    const mid = Math.floor((left + right) / 2) // 0
    const current = nums[mid]; // 1
    if (current === target) {
      return mid
    } else if (current < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return left
}

const arr = [1,3,5,6];
console.log(searchInsert(arr, 2));
