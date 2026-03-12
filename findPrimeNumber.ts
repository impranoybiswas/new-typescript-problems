function primeCheck(n: number) {
  if (n < 1) return false; // prime start from 2
  if (n === 2) return true; // if number is two
  if (n % 2 === 0) return false; //for even

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log("isPrime : ", primeCheck(4));
