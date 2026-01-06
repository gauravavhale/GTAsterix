class User {
    constructor(name, email, password){
        this.name = name,
        this.email = email,
        this.password = password 
    }
    login(){
        return `${this.name} has logged in with email: ${this.email}`;

    }
    logout(){
        return `${this.name} has logged out.`;
    }
}

class Admin extends User {
    constructor( name,email,password, title ){
        super(name,email,password)
        this.title = title;
    }
}

const admin1 = new Admin("John", "john@mail.com","John@1234","Super Admin")
const user1 = new User("David","david@mail.com","09877")

console.log(admin1.name);
console.log(user1.email);
console.log(user1.login());
console.log(admin1.login());
console.log(user1.password);
console.log(admin1.title);