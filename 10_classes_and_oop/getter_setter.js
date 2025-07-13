class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}priyanshi`
    }

    set password(value){
        this._password = value
    }
}

const priyanshi = new User("p@priyanshi.ai", "abc")
console.log(priyanshi.email)