// function longestIncreasingSubsequence(arr) {
//   const n = arr.length;
//   const dp = new Array(n).fill(1);

//   for (let i = 1; i < n; i++) { // 3 < 6, 3,4,5
//     for (let j = 0; j < i; j++) { // 0 < 3   0,1,2 [0,1,0]
//       if (arr[i] > arr[j]) { // 3 > 0
//         dp[i] = Math.max(dp[i], dp[j] + 1); // [1,2,1, 3,3,4]
//       }
//     }
//   }
//   console.log(dp);
//   return Math.max(...dp);
// }

function longestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = new Array(n).fill(1)

  for (let i = 1; i < n; i++) {
    for(let j = 0; j < i; j++) {
      if(arr[i] > arr[j]) 
        dp[i] = Math.max(dp[i], dp[j] + 1)
    }    
  }

  console.log(dp);
  return Math.max(...dp)
}

// Example usage
const sequence = [0, 1, 0, 3, 2, 3];
console.log(longestIncreasingSubsequence(sequence)); // Output: 5