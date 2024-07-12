function coinChange(coins, target) {
  const dp = new Array(target + 1).fill(Infinity); // [0, 1, 1, Infinity]
  dp[0] = 0;
  
  for (let i = 1; i <= target; i++) {
    for (const coin of coins) {      
      if (coin <= i) { // 2 <= 3
        dp[i] = Math.min(dp[i], dp[i - coin] + 1); // 1 1
      }
    }
  }
  console.log(dp);
  
  return dp[target] === Infinity ? -1 : dp[target];
}

// Example usage
const coins = [5, 1, 2];
const targetAmount = 3;

const minimumCoins = coinChange(coins, targetAmount);
console.log(minimumCoins); // Output: 3