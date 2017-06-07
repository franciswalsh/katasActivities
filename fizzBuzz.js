function fizzBuzzFun(num){
  let numArray = [];
  for (let i = 0; i <= num; i++){
    if (i % 3 === 0 && i % 5 === 0){
      numArray.push("FizzBuzz");
    }
    else if (i % 5 === 0){
      numArray.push("Buzz");
    }
    else if (i % 3 === 0){
      numArray.push("Fizz");
    }
    else {
      numArray.push(i);
    }
  }
  return numArray;
}

console.log(fizzBuzzFun(100));
