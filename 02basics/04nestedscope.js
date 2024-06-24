function one(){
  const userName="samir";

  function two(){
    const age=22;
    // console.log(userName);
  }
  // console.log(age); // not possible cause userName is global for two() but age not global for one()

  two();
}

one();

if(true){
  const userName="samir";
  if(userName==="samir"){
    const age=22;
    // console.log(userName + age); //no error
  }
  // console.log(age); //error
}
// console.log(userName); //error

console.log(addOne(5)); //accessible

function addOne(value){
  return value+1;
}

// console.log(addTwo(5)); //not accessible

const addTwo = function(value){
  return value+2;
}

