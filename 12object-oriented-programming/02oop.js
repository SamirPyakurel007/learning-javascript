//object literals

const user={
  name:'samir',
  email:'samir@google.com',
  loginCount:8,
  signedIn:true,
  getUserDetails: function(){
    // console.log('got user details');
    // console.log(`name: ${this.name}`); //current context
    // console.log(this);
  }
}

// console.log(user);
//console.log(user.getUserDetails());
// console.log(this); //empty

//creating more users is hectic so constructor function

//constructor function

// const promise1=new Promise();
// const date=new Date();

function userDetails(username, loginCount, isLoggedIn){
  this.username=username;
  this.loginCount=loginCount;
  this.isLoggedIn=isLoggedIn;
  this.greeting=function(){
    console.log(`welcome ${this.username}`);
  }

  return this; //default
}

const user1=new userDetails('samir', 12, true);
const user2=new userDetails('sam', 11, false);  //user2 overwrites values
console.log(user1.constructor);  //eventhough user2 is not printed
// console.log(user2);
//use new keyword line 37 and 38 

//.constructor is reference of itself



