let arr = [1, 3, 2, 5, 6, 7, 8];

function checkNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    let isPrime = true;

    if (number <= 1) {
      isPrime = false;
    }

    for (let j = 2; j <= Math.sqrt(number); j++) {
      if (number % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(number);
    }
  }
}

checkNumber(arr);