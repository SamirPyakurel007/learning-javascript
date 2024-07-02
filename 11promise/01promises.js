// how to create promises

const promise1=new Promise(function(resolve, reject){
  //do an async task
  //DB calls, cryptography, network
  setTimeout(function(){
    // console.log('async task is complete');
    resolve();                              //now resolve is connected to .then()
  }, 1000);
});

promise1.then(function(){
  // console.log('promise consumed');
}); //.then() has direct connection to resolve

// 'promise consumed' never executed 
//besause .then() and resolve is not connected
//line no 8.

//better way

new Promise(function(resolve, reject){
  setTimeout(function(){
    // console.log('async task 2');
    resolve();
  },1000);
}).then(function(){
  // console.log('async 2 resolved');
});

const promise3=new Promise(function(resolve, reject){
  setTimeout(() => {
    resolve({username:'samir', dob:'23-sep-2001'});   //passing obj in resolve reflects on then
  }, 1000);
});
promise3.then(function(user){
  // console.log(user);
});

const promise4=new Promise(function(resolve, reject){
  setTimeout(()=>{
    let error=false;
    if(!error){
      resolve({username:'anything', dob:'as your wish'});
    }else{
      reject('ERROR: something went wrong!');
    }
  },1000);
});

// const username=promise4.then((user)=>{
//   console.log(user);
//   return user.username;
// });

// console.log(username);

//not possible to directly extract values 

promise4.then((user)=>{
    // console.log(user);
    return user.username;
  })
  .then((username)=>{
    // console.log(username);
  })
  .catch((error)=>{
    // console.log(error);
  })
  // .finally(()=>console.log('the promise is either resolved or rejected'));

  const promise5=new Promise((resolve, reject)=>{
    setTimeout(() => {
      let error=true;
      if(!error){
        resolve({language:'javascript', name:'js'});
      }else{
        console.log('something went wrong!');
      }
    }, 1000);
  });
  
  async function consumepromise5(){
    try{
      const response=await promise5;
      console.log(response);
    } catch(error){
      console.log(error);
    }
  };

  consumepromise5();

  // async function getAllUser(){
  //   try{
  //     const response=await fetch('https://jsonplaceholder.typicode.com/users');
  //     const data=await response.json();
  //     // console.log(data);
  //   }catch(error){
  //     // console.log(error);
  //   }
  // };
  // getAllUser();

  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    console.log(data);
  })
  .catch((error)=>{
    console.log(error);
  });




