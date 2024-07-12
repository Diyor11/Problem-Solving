function coinChange(coins, target) {
  coins.sort((a, b) => b - a); // Sort coins in descending order

  let count = 0;
  let currentAmount = target;

  for (let i = 0; i < coins.length; i++) {
    const currentCoin = coins[i];
    
    while (currentAmount >= currentCoin) {
      // console.log(currentAmount);    
      count++;
      currentAmount -= currentCoin;
    }

    if (currentAmount === 0) {
      break; // Target amount reached
    }
  }

  if (currentAmount !== 0) {
    return -1; // Target amount cannot be achieved
  }

  return count;
}

// Example usage
const coins = [25, 10, 4, 3];
const targetAmount = 47;

const minimumCoins = coinChange(coins, targetAmount);
console.log(minimumCoins); // Output: 5