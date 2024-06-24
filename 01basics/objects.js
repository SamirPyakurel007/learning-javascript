//singleton

//object literals

const myKey= Symbol('#key1');

const object1={
  [myKey]:"myKey1",
  "full-name":"samir pyakurel",
  name:"samir", 
  dob:"sep 23, 2001",
  email:"samir@google.com",
  skill:"javascript"
}

 console.log(object1.name);

//other way

 console.log(object1["name"]);

 //console.log(object1."full-name"); 
//not possible
 Object.freeze(object1);
 console.log(object1["full-name"]);

 console.log(object1[myKey]);

 console.log(object1);

object1.welcome=function(){
  console.log('welcome to my object');
}
object1.welcome2=function(){
  console.log(`welcome to my object ${this.name}`);
}

console.log(object1.welcome());
console.log(object1.welcome2());

