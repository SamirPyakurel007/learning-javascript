const course={
  courseName:"javascript",
  price:"100$",
  teacher:"internet"
}

// console.log(course.courseName);
//for more usage . operator is less viable

const{courseName:cName}= course; //destructuring an object
console.log(cName);

//json format

//api in object format
// {
//   "name":"samir",
//   "email":"samir@gmail.com"
// }

//array format

// [
//   {},
//   {},
//   {}
// ]