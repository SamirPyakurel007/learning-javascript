let myDate= new Date();

// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

let enterDate= new Date("2023-06-18");
// console.log(enterDate.toLocaleString());

let timeStamp=Date.now();
timeStamp=Math.floor(timeStamp/1000);
// console.log(timeStamp);

let newDate=new Date();
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getMonth());
// console.log(newDate.getSeconds());

newDate.toLocaleString('default', {
  weekday:"long",
  month:"short"
});

// console.log(newDate.getMonth());