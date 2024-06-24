//reduce

const myArray=[1, 2, 3];

// const totalValue=myArray.reduce(function(acc, curVal){
//   // console.log(`accumulator= ${acc}, current value= ${curVal}`);
//   return acc+curVal;
// }, 0);

//alternatively

const totalValue=myArray.reduce((acc, curVal)=>acc+curVal, 0);

// console.log(totalValue);

const shoppingCart=[
  {
    item:'book',
    price:299
  },
  {
    item:'shoes',
    price:2999
  },
  {
    item:'pant',
    price:1299
  },
  {
    item:'smart phone',
    price:29999
  }
];

const totalPrice = shoppingCart.reduce((acc, items)=>acc+items.price, 0);
// console.log(totalPrice);

