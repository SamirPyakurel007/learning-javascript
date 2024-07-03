class user{
  constructor(username){
    this.username=username;
  }

  logMe(){
    console.log(`username: ${this.username}`);
  }

  static createId(){   //static basically blocks you from accessing it
    return `123`;
  }
}

// const samir=new user('samir');
// console.log(samir.createId()); //error

class admin extends user{
  constructor(username, email){
    super(username);
    this.email=email;
  }
}

const samir1=new admin('hey, samir', 'samir@gmail.com');
samir1.logMe();

console.log(samir1.createId());  //error as static blocks it's access 
