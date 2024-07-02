function multiplyBy5(num){
  return num*5;
}

// multiplyBy5(5);

multiplyBy5.power=2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

//everything is object in javascript

//prototypal inheritance, everything is inherit to object

function createUser(username, score){
  this.username=username;
  this.score=score; //.this sets current context 
}

//injecting our own method

createUser.prototype.increment= function(){
  this.score++;
}

createUser.prototype.printMe=function(){
  console.log(`score is ${this.score}`);
}

const user1=new createUser('samir', 10);
const user2=new createUser('sam', 20);

user1.printMe();  //cannot read properties of undefined 
user2.printMe();
//use new in line 31 32

/*

here's what happens behind the scenes when the new keyword is used:

A new object is created: the new keyword initiates the creation of a 
new javascript object.

A prototype is linked: the newly created object linked to the prototype
property of the constructor function. this means that it has access to 
properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the 
specified arguments and this is bound to the newly created object. If 
no explicit return value is specified from the constructor. javascript 
assumes this, the newly created object, to be the intended return value.

The new object is returned: after the constructor function has been called,
if it doesn't return a non-primitive value(object, array, function, etc),
the newly created object is returned.

*/