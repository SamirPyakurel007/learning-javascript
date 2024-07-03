//class based get set

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

//alternatively
//function based get set

function user1(email, password){
  this._email=email;
  this._password=password;

  Object.defineProperty(this, 'email', {
    get: function(){
      return this._email.toUpperCase();
    },
    set: function(value){
      this.email=value;
    }
  })
  Object.defineProperty(this, 'password', {
    get: function(){
      return this._password.toUpperCase();
    },
    set: function(value){
      this._password=value;
    }
  })
}

const samir1=new user1('samir1@gmail.com', '123abc')
console.log(samir1.email);
console.log(samir1.password);

//object based get set

const user2={
  _email:'samir2@gmail.com',
  _password:'abcde',
  get email(){
    return this._email.toUpperCase();
  },
  set email(value){
    this._email=value;
  }
}

const samir2=Object.create(user2);
console.log(samir2.email);