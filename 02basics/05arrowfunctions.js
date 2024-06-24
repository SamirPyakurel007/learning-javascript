const user={
  name:"samir",
  age:22,
  welcomeMessage:function(){
    // console.log(`${this.name} , welcome`);
    // console.log(this); //current 
  }
}

// user.welcomeMessage();
// user.name="sam";
// user.welcomeMessage();

// console.log(this);//empty in node not in inspect console, window object

// function one(){
//   let username="samir";
//   console.log(this.username); //not possible, this works only in object 
// }
const one=()=>{
  let username="samir";
  // console.log(this.username); //still not possible, this works only in object 
}

one();

// --------------------arrow function-------------------

// const addNum=(num1, num2)=>{ 
//   return num1+num2;            //return is required
// }
const addNum=(num1, num2)=>num1+num2; //return and braces not required

console.log(addNum(2,3));

//objects needs to be wrapped in braces in above method

