function singleNumber(nums) {
  const avalibleNums = {};
  let active = null;
  
  for(let i = 0; i < nums.length; i++) {
    if(i in avalibleNums) {
      avalibleNums[i].push(nums[i])
    } else {
      const arr = [nums[i]];
      avalibleNums[i] = arr;
      active = nums[i]
    }
  }
  return active;
};

const arr = [2,2,1];
console.log(singleNumber(arr));