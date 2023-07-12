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

var count = 0;
var startTime = performance.now();

function executeCountPrimeNumbers() {
    countPrimeNumbers();
    count++;

    if (count < 100) {
    setTimeout(executeCountPrimeNumbers, 0);
    } else {
    var endTime = performance.now();
    var executionTime = endTime - startTime;

    console.log(
        'Execution time of calculating prime numbers 100 times was',
        executionTime.toFixed(16),
        'milliseconds'
    );
    }
}

executeCountPrimeNumbers();  
