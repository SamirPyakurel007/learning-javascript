function outer(){
  let username='samir';
  function inner1(){
    console.log(username); 
  }
  return inner1;
}

const myFunc=outer(); // eventhough outer function is executed the inner function in returned
                      //so, not only the inner function is returned the whole lexical scope is returned
myFunc();


