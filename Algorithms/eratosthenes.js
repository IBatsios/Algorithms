function sieveOfEratosthenes(num) {
  var initArray = [];

  // initialize the array
  for (var i = 0; i <= num; i++) {
    initArray.push(true);
  }

  // remove the multiples of the prime numbers
  for (var i = 2; i <= num; i++) {
    for (var j = i * i; j <= num; j += i) {
      initArray[j] = false;
    }
  }

  var primeNumbers = [];

  for (var i = 2; i <= num; i++) {
    // if the initArray is still true, push into new array
    if (initArray[i]) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}
