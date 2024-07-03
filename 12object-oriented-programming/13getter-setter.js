class user{
  constructor(email, password){
    this.email=email;
    this.password=password;
  }
  get email(){
    return this._email.toUpperCase();
  }

  set email(value){
    this._email=value;
  }

  get password(){
    return this._password.toUpperCase();
  }

  set password(value){    
    this._password=value.toUpperCase();
  }
}

//both constructor and setter try to set password
//error: maximum call stack size exceeded

const samir= new user('samir@gmail.com', 'abc123');
console.log(samir.password);
console.log(samir.email);