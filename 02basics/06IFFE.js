// Immediately Invoked Function Expressions (IFFE)

(function iHateNaming(){    //named iffe
  console.log('help me!!!');
})();

((name)=>{
  console.log(`please >:) i am ${name}` ); //unnamed iffe
})('samir');


//use to not pollute globle scope or be safe from pollution