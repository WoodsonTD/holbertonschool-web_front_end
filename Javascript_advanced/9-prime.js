function countPrimeNumbers() {
    var startTime = performance.now();
    var count = 0;

    for (var number = 2; number <= 100; number++) {
    if (isPrime(number)) {
        count++;
    }
    }

    var endTime = performance.now();
    var executionTime = endTime - startTime;

    console.log(
    'Execution time of printing countPrimeNumbers was',
    executionTime.toFixed(16),
    'milliseconds'
    );

    return count;
}

function isPrime(number) {
    if (number < 2) {
    return false;
    }

    for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        return false;
    }
    }

    return true;
}

var primeCount = countPrimeNumbers();
console.log('Number of prime numbers from 2 to 100:', primeCount);

