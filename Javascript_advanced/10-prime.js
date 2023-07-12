function countPrimeNumbers() {
    var count = 0;

    for (var number = 2; number <= 100; number++) {
    if (isPrime(number)) {
        count++;
    }
    }

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

var startTime = performance.now();
for (var i = 0; i < 100; i++) {
    countPrimeNumbers();
}
var endTime = performance.now();
var executionTime = endTime - startTime;

console.log(
    'Execution time of calculating prime numbers 100 times was',
    executionTime.toFixed(16),
    'milliseconds'
);
