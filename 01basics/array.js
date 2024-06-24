const myArray= [0, 1, 2, 3, 4, 5, "samir", true];
// console.log(myArray[3]);

const myArray1= new Array(1, 2, 3, 4, 5);
myArray1.unshift(9);
myArray1.shift();
// console.log(myArray1[4]);

// myArray1.push(6);
// console.log(myArray1);
// myArray1.pop();

// console.log(myArray1.includes(9));
// console.log(myArray1.indexOf(9));
// console.log(myArray1.indexOf(5));

const newArray=myArray1.join();
// console.log(myArray1);
// console.log(newArray);

const myn1=myArray1.slice(1,3);
// console.log(myn1);
// console.log(myArray1);

const myn2=myArray1.splice(1,3);
// console.log(myn2);
// console.log(myArray1);

let marvelHeros=['thor', 'ironman', 'spiderman'];
let DCHeros=['superman', 'batman', 'flash'];

// marvelHeros.push(DCHeros);

// const combinedHero=marvelHeros.concat(DCHeros);
// console.log(combinedHero);

const allNewHeros= [...marvelHeros, ...DCHeros];
// console.log(allNewHeros);

const anotherArray=[1, 2, [3, 4, 5], 7, [6, [4, 5]]];
const realAnotherArray=anotherArray.flat(Infinity);
// console.log(realAnotherArray);

// console.log(Array.isArray('samir'));
// console.log(Array.from('samir'));
let score1=100;
let score2=200;

// console.log(Array.of(score1, score2));