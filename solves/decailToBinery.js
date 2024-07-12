function decimalToBinary(number) { // 2
  if (number === 0) {
    return '0'; // Special case for 0
  }

  let binary = ''; // 1010

  while (number > 0) {
    
    const remainder = number % 2;
    console.log(remainder);
    binary = remainder + binary;
    number = Math.floor(number / 2);
  }

  return binary;
}

console.log(decimalToBinary(5));
