//for of
//array specific 

const myArray=[1, 2, 3, 4, 5];
for (const val of myArray) {
  // console.log(`the count is ${val}`);
}

const myString='string';
for(const val of myString){
  // console.log(`the letter is ${val}`);
}

//maps

const map = new Map;
map.set('USA', 'united states of america');
map.set('IN', 'india');
map.set('FR', 'france');
map.set('GER', 'germany');

// console.log(map);

for(const [key, value] of map){
  // console.log(key, ':-',value);
}

// const myObj={
//   name:'samir',
//   age:'22'
// }

// for (const val of myObj) {
//   // console.log(val);      //not possible
// }

const myObj2={
  js:'javascript',
  cpp:'c++',
  py:'python'
};

for (const key in myObj2) {
  // console.log(key, myObj2[key]);
}

for (const key in myArray) {
  // console.log(key, myArray[key]);
}

for (const key in map) {
  // console.log(key);   //not iterable
}