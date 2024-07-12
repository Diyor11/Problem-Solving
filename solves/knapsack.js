function knapsack(products, maxSpace) {
  const n = products.length;
  const dp = new Array(n + 1).fill(0).map(() => new Array(maxSpace + 1).fill(0));

  /**
   * [T/R,  0,0,0,0]
   * [ipad, 1500,1500,1500,1500]
   * [mblok,1500,1500,1500,3000]
   * [max  ,1500,1500,1500,0]
   * 
   */

  for (let i = 1; i <= n; i++) {
    const { price, space } = products[i - 1]; 
    for (let j = 1; j <= maxSpace; j++) {
      if (space <= j) { // 1
        console.log(j - space);
        dp[i][j] = Math.max(dp[i - 1][j], price + dp[i - 1][j - space]); // 1500, 2000 + 0
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  console.log(dp);
  
  const selectedProducts = [];
  let i = n;
  let j = maxSpace;

  while (i > 0 && j > 0) {
    if (dp[i][j] !== dp[i - 1][j]) {
      selectedProducts.push(products[i - 1].name);
      j -= products[i - 1].space; // Corrected line
    }
    i--;
  }

  return {
    selectedProducts,
    totalPrice: dp[n][maxSpace],
  };
}

const products = [
  { name: 'ipad', price: 1500, space: 1 },
  { name: 'monoblok', price: 3000, space: 4 },
  { name: 'laptop', price: 2000, space: 3 },
];

console.log(knapsack(products, 4));