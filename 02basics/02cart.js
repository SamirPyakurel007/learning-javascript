function calculateCartPrice(...num1){
  return num1;
}

console.log(calculateCartPrice(200, 400, 600))//for unknown no of arguments use rest operator

// const user={
//   userName:'samir',
//   price:200
// }

function insertObject(obj){
  console.log(`username is ${obj.userName} and price is ${obj.price}`)
}

insertObject({
  userName:'samir',
  price:200
});