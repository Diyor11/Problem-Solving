function majorityElement(nums) {
  const n = nums.length
  let el = null
  const ob = {}

  for(let i  = 0; i < n; i++) {
    const item = nums[i]
    if(!ob.hasOwnProperty(item)) ob[item] = 0
    ob[nums[i]] += 1

      if(!el || ob[el] < ob[item]) {
          el = nums[i]
      }
  }

  return el
};

console.log(majorityElement([6,5,5]));