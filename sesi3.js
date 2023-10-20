function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
  
  function findNextPrime(input) {
    let nextNumber = input + 1;
    while (true) {
      if (isPrime(nextNumber)) {
        return nextNumber;
      }
      nextNumber++;
    }
  }
  
  const input = 14; 
  const nextPrime = findNextPrime(input);
  console.log(`Bilangan prima setelah ${input} adalah ${nextPrime}`);