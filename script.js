function numbers(n){
    if(! Number.isInteger(n)) {
      console.log('Please insert a number.');
      return;
    }
    let numbersArray = [];
    let reduced = n;
    let sum = 0;

    do {
      numbersArray.unshift(reduced % 10); 
      sum += reduced % 10; 
      reduced = Math.trunc(reduced / 10); 
    } while(reduced >= 10);

    if(reduced % 10 != 0) {
      numbersArray.unshift(reduced % 10);
      sum += reduced % 10;
    }

    console.log("Number of digits : " + numbersArray.length);

    console.log("Sum of digits : " + sum);

    let inversedNumber = 0;
    for(let i = numbersArray.length; i--; i >= 0) {
      inversedNumber += numbersArray[i] * Math.pow(10, i);
    }

    console.log("Inversed number : " + inversedNumber);
  }

  numbers(123);