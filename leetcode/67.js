function addBinary(a, b) {
  let result = ''
  let carry = 0
  let i = a.length - 1 // 1
  let j = b.length - 1 // 0

  while (i >= 0 || j >= 0 || carry > 0) {
    const digitA = i >= 0 ? parseInt(a[i]) : 0
    const digitB = j >= 0 ? parseInt(b[j]) : 0

    const sum = digitA + digitB + carry
    const digitSum = sum % 2
    carry = Math.floor(sum / 2)

    result = digitSum + result

    i--
    j--
  }

  return result
}

const a = "11", b = "1"
console.log(addBinary(a,b));
