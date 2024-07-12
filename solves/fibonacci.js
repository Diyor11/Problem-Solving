// ========= dynamic programming =============================================
function fibonacci(n, memo = {}) {
  if (n < 3) {
    return 1;
  }

  if (memo[n]) {
    return memo[n];
  }

  const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  memo[n] = result;
  console.log(memo);

  return result;
}

// Example usage
console.log(fibonacci(5)); // Output: 8
// 1, 1, 2, 3, 5, 8, 13, 21, 34
// 1, 2, 3, 4, 5, 6, 7,  8,  9

// ========= recursion =============================================
// function fibonacci(n) {
//   if(n <= 1) return n

//   return fibonacci(n - 1) + fibonacci(n - 2) // 5
// }
