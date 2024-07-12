// function removeDuplicates(arr) {
//   return [...new Set(arr)]
// }

// function increasingTriplet(nums) {
//   if (nums.length > 100000) nums = removeDuplicates(nums)
//   const n = nums.length
//   const dp = new Array(n).fill(1)

//   for (let i = 1; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1)
//         if (dp[i] === 3) return true
//       }
//     }
//   }
//   return false
// }

function increasingTriplet(nums) {
  let first = Infinity // 1
  let second = Infinity // 1

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= first) {
      first = nums[i]
    } else if (nums[i] <= second) {
      second = nums[i]
    } else {
      return true
    }
  }
  console.log(first, second);
  
  return false
}
const arr = [2, 1, 3]
console.log(increasingTriplet(arr))
