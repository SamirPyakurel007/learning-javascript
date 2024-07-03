function outer(){
  let username='samir';
  function inner1(){
    let password='123abc';
    console.log('inner1: ',username); //can access parent
  }
  function inner2(){
    console.log('inner2: ',username); //can access parent
    // console.log(password);  // can't access siblings
  }

  inner1();
  inner2();

  console.log(password); // can't access child
}

outer();
// console.log(username); //can't access outside the function