let myName='samir     ';
let myString='dontknow     ';

String.prototype.trueLength= function(){
  console.log(`${this}`);
  console.log(`true length is: ${this.trim().length}`);
}

console.log(myName.trueLength());
'idontknowwhattowrite     '.trueLength();