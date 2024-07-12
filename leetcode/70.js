function climbStairs(n, memo = {}) {
  if(n < 4) return n

  return climbStairs(n - 1) + climbStairs(n - 2)
};

console.log(climbStairs(5));
