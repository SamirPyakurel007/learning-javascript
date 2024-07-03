class user{
  constructor(username){
    this.username=username;
  }

  logMe(){
    console.log(`username is: ${this.username}`);
  }
}

class admin extends user{
  constructor(username, email, password){
    super(username);
    this.email=email;
    this.password=password;
  }

  addFeature(){
    console.log(`new feature was added by ${this.username}`);
  }
}

const samir=new admin('samir', 'samir@google.com', '123abcd');
samir.addFeature();

const samir1=new user('hey, samir');
// samir1.addFeature(); //no access
samir1.logMe(); //has access

console.log(samir===samir1);// false
console.log(admin instanceof user);//false
console.log(user instanceof admin);//false
console.log(samir instanceof admin); //true
console.log(samir instanceof user); //true
console.log(samir1 instanceof admin); //false
console.log(samir1 instanceof user); //true
