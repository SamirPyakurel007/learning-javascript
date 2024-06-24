// if(true){
      //code executed
// }

// if (2===2){
      //code executed
// }

const user="samir";
if(user==="samir"){
  // console.log("welcome");
}

if(2=="2"){
  // console.log('executed'); // no error changes type from string to num
}

if(2==="2"){
  // console.log('not executed') // error num not equal to string
}

const temp=41;
if(temp<45){
  // console.log("fine");
}else{
  // console.log("not fine");
}

const score=200

if(score>100){
  const power="fly"
  // console.log(`i can ${power}`);
}

//console.log(`i can ${power}`); // not possible because of scope

const pocket=100;
if(pocket<50){
  // console.log('less than 50');
}else if(pocket===50){
  // console.log('equals to 50');
}else{
  // console.log('more than 50');
}

const userLoggedIn=true;
const debitCard=true;

if (userLoggedIn && debitCard){
  // console.log('allow to buy');

}else{
  // console.log('dont allow to buy');
}