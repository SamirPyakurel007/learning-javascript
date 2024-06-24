// singleton object
const person=new Object();

//non singleton object
const person1={
  
};

person1.id="123abc";
person1.name="samir";

// console.log(person1);

const user1={
  email:"samir@gmail.com",
  fullname:{
    userFullName:{
      firstName:"samir",
      lastName:"pyakurel"
    }
  }
}

// console.log(user1.fullname.userFullName.lastName);

const obj1={
  1:"a",
  2:"b",
  3:"c"
}

const obj2={
  5:"a",
  6:"b",
  7:"c"
}

// const obj3={obj1, obj2};
// console.log(obj3);
//not viable

// const obj3=Object.assign({}, obj1, obj2);
// console.log(obj3);
//obj1 and obj2 are placed in obj3 



const obj3={...obj1, ...obj2};
// console.log(obj3);
//better way

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
console.log(obj1.hasOwnProperty('isloged'));