function countChange(amount, coins) {
  const combinations = new Array(amount + 1).fill(0);
  combinations[0] = 1;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      combinations[i] += combinations[i - coin];
    }
  }

  return combinations[amount];
}

const amount = 10;
const coins = [1, 2, 5];
console.log(countChange(amount, coins)); // Output: 26