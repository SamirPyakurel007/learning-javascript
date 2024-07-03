const descripter=Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descripter);

// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// console.log(Math.PI);

const item={
  name:'book',
  price:100
}

// console.log(Object.getOwnPropertyDescriptor(item, 'name'));

Object.defineProperty(item, 'name',{
  writable:false,
  enumerable:false,
})

console.log(Object.getOwnPropertyDescriptor(item, 'name'));

for(let [key, value] of Object.entries(item)){
  if(typeof value!=='function'){
    console.log(`${key} : ${value}`);
  }
}
