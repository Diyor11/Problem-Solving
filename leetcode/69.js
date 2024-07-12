function squareRoot(number) {
  if (number === 0) {
    return 0;
  }

  let guess = number; // 1
  let previousGuess; // 4
  
  while (true) {
    previousGuess = guess; // 1
    guess = (guess + number / guess) / 2; // 1
    
    // Check if the guess has converged
    if (Math.abs(guess - previousGuess) < 0.00001) {
      break;
    }
  }
  
  return guess;
}

let number = 4;
console.log(squareRoot(number));