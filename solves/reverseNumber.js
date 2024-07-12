function reverseNumber(number) { // 
  let reversed = 0; // 32

  while (number !== 0) {
    console.log(reversed);
    
    const digit = number % 10;
    reversed = reversed * 10 + digit;
    number = Math.floor(number / 10);  
  }

  return reversed;
}

console.log(reverseNumber(123));
