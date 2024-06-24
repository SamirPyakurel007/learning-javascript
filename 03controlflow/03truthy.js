const myName="samir";

if(myName){
  // console.log('say hello');
}else{
  // console.log('dont say hello');
}

//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//rest are truthy
//"0", "false", " ", [], {}, function(){},  

const arr1=[];

if(arr1.length===0){
  // console.log('array is empty');
}

const obj1={};

if(Object.keys(obj1).length===0){
  // console.log('object is empty');
}