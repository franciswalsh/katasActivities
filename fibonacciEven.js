function fibEvenSum(num){
  let fibArray = [1,2];
  let evenCounter = 0;
  let i = 1;
  while ((fibArray[(fibArray.length)-1]) <= num){
    fibArray.push(fibArray[i]+fibArray[i-1]);
    if (fibArray[i] % 2 === 0) {
      evenCounter += fibArray[i];
    }
    i++;
  }
  return evenCounter;
}

console.log(fibEvenSum(4000000));
