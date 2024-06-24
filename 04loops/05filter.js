const myArray=['js', 'ty', 'py', 'cpp', 'c#'];

const values=myArray.forEach((item)=>{
  // console.log(item);
  // return item;//still undefined can't return value
});

// console.log(values);//undefined


//filter

const myArray2=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const arrValue=myArray2.filter((num)=> num>4);
// console.log(arrValue);

const arrValue=myArray2.filter((num)=> {
  return num>4; // needed to return in parenthesis
});

// 

// alternative to filter

const myArray3=[];

myArray2.forEach((item)=>{
  if(item>4){
    myArray3.push(item);
  }
});

// console.log(myArray3);

const books=[
  {title:'book one', genre:'fiction', publish:1981},
  {title:'book two', genre:'non-fiction', publish:1982},
  {title:'book three', genre:'self help', publish:1983},
  {title:'book four', genre:'science', publish:1984},
  {title:'book five', genre:'history', publish:1985}
];

// const book=books.filter((bk)=> bk.genre==='history');
const book=books.filter((bk)=>{ 
  return bk.publish>1982 && bk.genre==='self help'
});
// console.log(book);

 

