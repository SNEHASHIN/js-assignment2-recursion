// 1.Print factorial of a number using recursion.
function factorial(n) {
    if(n<=1){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
  }
  console.log(factorial(5));