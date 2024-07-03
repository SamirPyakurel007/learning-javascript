//after ES6

class user{
  constructor(username, email, password){
    this.username=username;
    this.email=email;
    this.password=password;
  }

  encryptPassword(){
    return `${this.password}abc`;
  }

  capitalize(){
    return `${this.username.toUpperCase()}`;
  }
}

const samir=new user('samir', 'samir@google.com', 'abc123');
console.log(samir.encryptPassword());
console.log(samir.capitalize());

//behind the scene 

// function user(username, email, password){
//   this.username=username;
//   this.email=email;
//   this.password=password;
// }

// user.prototype.encryptPassword=function(){
//   return `${this.password}abc`;
// }
// user.prototype.capitalize=function(){
//   return `${this.username.toUpperCase()}`;
// }

// const samir1=new user('samir', 'samir@google.com', 'abc123');
// console.log(samir1.encryptPassword());
// console.log(samir1.capitalize());