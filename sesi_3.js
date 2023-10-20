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
  
  function countPrimesInRange(start, end) {
    let sum = 0;
    for (let num = start; num <= end; num++) {
      if (isPrime(num)) {
        sum += num;
      }
    }
    return sum;
  }
  
  const inputAwal = 1; 
  const inputAkhir = 10; 
  const totalPrimes = countPrimesInRange(inputAwal, inputAkhir);
  console.log(`Jumlah bilangan prima dalam rentang dari ${inputAwal} hingga ${inputAkhir} adalah ${totalPrimes}`);