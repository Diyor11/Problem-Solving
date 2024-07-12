function maxProfit(prices) {
  let minPrice = null, maxPrice = null

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i]

    if (minPrice === null || minPrice > price) {
      minPrice = price
    } else if (maxPrice === null || price - minPrice > maxPrice) {
      maxPrice = price - minPrice
    }
  }
  console.log(minPrice);
  
  return maxPrice || 0
}

console.log(maxProfit([2,1,2,1,0,1,2]))
