function myName(){
  console.log("s");
  console.log("a");
  console.log("m");
  console.log("i");
  console.log("r");
}

// myName();

function addNumbers(number1, number2){ //parameters
  // let result=number1+number2;
  // return result;
  //or

  return number1+number2;
}

// addNumbers(3, 4);//arguments

const result= addNumbers(4,7);
// console.log(result);

function logIn(user="samir"){
  if(user=== undefined){     //unused since user has  default value
    console.log('please enter name');
    return;
  }
  return `${user} logged in`;
}

console.log(logIn());
console.log(logIn('sammy'));