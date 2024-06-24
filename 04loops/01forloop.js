// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

const number=10;

for(let i=1; i<=10; i++){
  // console.log(i);
}

for(let i=0;i<=3;i++){
  for(let j=0;j<=3;j++){
    // console.log(`outer loop ${i}, inner loop ${j}`);
  }
}

let myArray=['ironman', 'thor', 'captain america', 'wanda', 'dr. strange'];

for (let i = 0; i <myArray.length; i++) {
  const element = myArray[i];
  // console.log(element);
}

//break and continue

for(let i=1; i<=20; i++){
  if(i===5){
    // console.log('5 detected');
    break;
  }
  // console.log(i);
}
for(let i=1; i<=20; i++){
  if(i===5){
    // console.log('5 detected');
    continue;
  }
  // console.log(i);
}