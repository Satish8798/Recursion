/* function inception(counter){
  if(counter>3){
    return 'done!';
  }
  counter++;
 return inception(counter);
}

let counter=0;

console.log(inception(counter)); */

//factorial

/* function findFactorialRecursive(number){ //o(n)
  if(number<3){
    if(number===0){
      return 1;
    }else {
      return number;
    }
  }
  return number*findFactorialRecursive(number-1);
}

function findFactorialIterative(number){ //o(n)
  if(number<3){
    if(number===0){
      return 1;
    }else {
      return number;
    }
  }
  let answer=number;
  for(let i=number-1;i>0;i--){
    answer= answer*i
  }
  
  return answer;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5)); */



/* function fibonacciIterative(n){ //o(n)
  let fibArray = new Array();
  fibArray= [0,1];
  for(let i=2;i<n+1;i++){
    fibArray.push(fibArray[i-1]+fibArray[i-2]);
  }
  console.log(fibArray);
}
fibonacciIterative(7);


function fibonacciRecursive(n){ //O(2^n)
  if(n<2){
    return n;
  }
  return fibonacciRecursive(n-1)+fibonacciRecursive(n-2)
}
fibonacciRecursive(3); */


//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
    if(str.length===1){
      return str;
    }
  return reverseString(str.substring(1))+str[0]
}

console.log(reverseString('satish'))
//should return: 'yretsam oyoy'