
class createUser{
     
    constructor(a,b,c){
        this.Name = a;
        this.surName  = b;
        this.age = c;
    }
    static hii= "Hello World";

    static{ // static block
        console.log(this); // it point to class
        this.run = "runing"
        this.fun = function(){
            console.log("funnnnnnn");
        }
        console.log("object"); // it alwayees run
        var fd = 55; // it aceess outside the class and outside this static block
        console.log(fd);

         
    }
    
     
    getBirthYear(){
        // console.log(fd);
        return 11
    }
    getFullName(){
        return this.Name +" "+this.surName
    }

}

const user1 = new createUser("Yash","landge", 20)
// console.log(user1);
// console.log(user1.getFullName());

// hii property is static we can't acceess using  user1 Object we  acceess using only that class name createUser
// console.log(user1.hii); // undefined
// console.log(createUser.hii);// Hello world
// console.log(user1.getBirthYear());

// console.log(createUser.getBirthYear());// it give error it is not a function 
// console.log(createUser.prototype.getBirthYear()); // 11



// console.log(createUser);
