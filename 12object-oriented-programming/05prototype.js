// let myName='samir     ';
// let myString='dontknow     ';

// console.log(myName.trueLength);   //undefined

let heros=['thor', 'spiderman'];
let heroPower={
  thor:'hammer',
  spiderman:'swing',
  getSpiderPower: function(){
    console.log(`spider power is ${this.spiderman}`);
  }
}
 
//injecting our own method in object because it is highest in power

Object.prototype.samir=function(){
  console.log('samir is present in all objects');
}

//injecting our own method in array 
//but objects cannot access this method because array is lower in priority htan object.

Array.prototype.samir1=function(){
  console.log('hello samir');
}

// heroPower.samir();

heros.samir();
heros.samir1();
// heroPower.samir1(); // so this gives the error as this method cannot be accessed by object

const details={
  name:'samir',
  gender:'male'
}

const presence={
  ispresent:true
}

const task={
  assignment:'write code',
  __proto__:presence
}

details.__proto__=presence;

//modern syntax

Object.setPrototypeOf(details, presence);

