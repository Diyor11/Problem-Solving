/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
  const middle = Math.floor(nums.length /2);
  const midVal = nums[middle]
  
  if (midVal > nums[middle - 1] && midVal < nums[middle + 1]) {
    nums[middle] = nums[middle + 1]
    nums[middle + 1] = midVal
  } else if (midVal < nums[middle - 1] && midVal < nums[middle + 1]) {
    nums[middle] = nums[middle - 1]
    nums[middle - 1] = midVal
  } 
  return nums
}

console.log(nextPermutation([3,2,1]));

