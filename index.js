// function findInterval(num) {
//   if(num < 2) return 1;
//   return num * findInterval(num - 1);
// }

// function sum(arr) {
//   if(arr.length === 1) return arr[0];
//   const val = arr.shift();
//   return val + sum(arr)
// }

// function calculateGCF(a, b) {
//   if (a === 0) return b
//   if (b === 0) return a

//   return calculateGCF(b, a % b)
// }

// function plusOne(digits) {
//   const n = digits.length;

//   for (let i = n - 1; i >= 0; i--) {
//     if (digits[i] < 9) {
//       digits[i]++;
//       return digits;
//     }

//     digits[i] = 0; // 1,3,0
//   }

//   // If we reach this point, it means all digits were 9
//   // and we need to add an additional digit at the beginning
//   digits.unshift(1);

//   return digits;
// }
