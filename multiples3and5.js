function multiples3and5(num){
  let numArray = [];
  for (let i = 0; i <= num; i++){
    if (i % 3 === 0 || i % 5 === 0){
    numArray.push(i);
    sumArray = numArray.reduce((a,b) => a + b);
    }
  }
  return sumArray;
}

console.log(multiples3and5(1000));
