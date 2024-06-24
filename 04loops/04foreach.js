let myArray=['js', 'cpp', 'c', 'c#', 'py', 'ty'];

myArray.forEach(function(item){
  // console.log(item);
});

myArray.forEach((item)=>{
  // console.log(item);
});

function print(item){
  // console.log(item);
}

myArray.forEach(print); //reference of the function

myArray.forEach((item, index, arr)=>{
  // console.log(item, index, arr);
});

const myArray2=[
  {
    language:'javascript',
    file:'js'
  },
  {
    language:'c++',
    file:'cpp'
  },
  {
    language:'python',
    file:'py'
  },
  {
    language:'typescript',
    file:'ts'
  }
];

myArray2.forEach((item)=>{
  // console.log(item.language, item.file);
});





