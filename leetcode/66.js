function plusOne(digits) {
  let number = BigInt(digits.join(""));
  number = number + BigInt(1);
  const result = number.toString().split("").map(Number);
  return result;
}

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
