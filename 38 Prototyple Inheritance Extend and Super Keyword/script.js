class createUser{
  
    constructor(firstName ,lastName ,age){
        this.firstName =firstName;
        this.lastName =lastName;
        this.age = age
    }

    getBirthYear(){
        return new Date().getFullYear() - this.age
    }
    getFullName(){
        return this.firstName + " "+ this.lastName
    }

    work(){
        console.log("User is Working");
    }
}

class student extends createUser  {
    constructor( firstName,lastName,age,standard){
        super(firstName,lastName,age);
        this.standard = standard

    }
    study(){
        console.log("studyinggg");
    }
}
class empoylee extends createUser {
    constructor(firstName ,lastName,age,company ){
        super(firstName ,age)
        this.company = company
    }

    work(){
        console.log("Working");
    }
}

const user1= new  createUser("king" ,"soal",25)
const student1 = new student("yash","landge" ,22 , "B.E")
const student2 = new student("snajay","landge" ,22,"Farma")
const  empoylee1 = new empoylee("yash","landge" ,22 , "B.E")
const  empoylee2 = new  empoylee("snajay","landge" ,22,"Farma")

console.log(user1.work);
console.log(student1.study());
console.log(empoylee2.company);
