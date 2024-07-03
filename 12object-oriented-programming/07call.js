function setUserName(username){
  //complexDB call
  this.username=username;
  console.log('called');   // 
}

function createUser(username, email, password){
  // setUserName(username); //it is called since line 4 is executed but it didn't hold the reference
  //so this.username cannot be accessed
  //in this case use .call to explicitly call the function setUserName()

  setUserName.call(this, username); // this is used because even if setUserName vanishes createUser has its access
  
  this.email=email;
  this.password=password;
}

const samir= new createUser('samir', 'samir@google.com', '1234abcd');
console.log(samir);