// nullish coalescing operator(??):null undefined

let val1;
// val1=5 ?? 10;
// val1=null ?? 10;
// val1= undefined ?? 15;
val1=null ?? 10 ?? 15;
console.log(val1);

//ternery operator

//condition ? true : false;

const age=20;

age<30?console.log('young'):console.log('old');