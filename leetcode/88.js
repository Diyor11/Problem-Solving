function merge(nums1, m, nums2, n) {
  let i = m - 1 // 0
  let j = n - 1 // 1
  let k = n + m - 1 // 2

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) { // 2 > 3
      nums1[k] = nums1[i]
      i--                 // [2,2,3]
    } else {
      nums1[k] = nums2[j]
      j--
    }
    k--
  }

  while (j >= 0) {
    nums1[k] = nums2[j]
    j--
    k--
  }

  return nums1
}

const nums1 = [2, 5, 0, 0],
  m = 2,
  nums2 = [1,4],
  n = 2
console.log(merge(nums1, m, nums2, n))
