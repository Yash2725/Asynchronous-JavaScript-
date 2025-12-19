class createUser{
    #age // private we can acees on within class not outside the class
    constructor(firstName ,lastName ,age){
        this.firstName =firstName;
        this.lastName =lastName;
        this.#age = age
    }

    hi = "Hello World" //public field
    // #hi = "Hello World" //private field

    getBirthYear(){
        return new Date().getFullYear() - this.#age
    }
    #getFullName(){
        return this.firstName+ " "+ this.lastName
    }
}


const user1 = new createUser("yash","landge" ,22)
const user2 = new createUser("yash","landge" ,22)

console.log(user1);
//  console.log(user2.getFullName()); // we cant aceess the privet property


//----------------------------------------------------------

const user5 = {
    Name : "yash",
    "last Name":"landge",
    '#age':20
}
console.log(user5.Name); // yash
// console.log(user5.#age);// error

console.log(user5['Name']); // yash
console.log(user5['#age']);// 20