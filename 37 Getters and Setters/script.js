// // Getters and Setters are work with classes and also the normal object


// const user ={
//     first :"yash",
//     lastName:"Landge",
//     age:20,
//     fullName(){
//         return `${this.first} ${this.lastName}`
//     }
// }
// console.log(user);
// console.log(user.fullName());

// user.fullName = "Sanjay" // pura ka pura function es string me convert  hoga means FullName is not the function is the proprety
// // console.log(user.fullName());// error FullName is the not  the Function
// console.log(user.fullName);//  sanjay
// console.log(user);

//--------------------------------

 
const user ={
    first :"yash",
    lastName:"Landge",
    age:20,
    get fullName(){
        console.log("Getting"); 
        return `${this.first} ${this.lastName}`
    },
    set fullName(value){
        // console.log("Setting");
        // console.log(value);

        // const splitting = value.split(" ")
        // this.first = splitting[0]
        // this.lastName = splitting[1]

            const [firstname , lastname] = value.split(" ")
            this.first = firstname
            this.lastName = lastname
    }

}


// console.log(user.fullName()); // Jb bhi hm get; function ke aage likhte hhee to usko function ki tarha acees Nahi Kar sakte use Proprty ki tarh aceess karna hoga
user.fullName = "sayali landge" ;  // pahile set fullName kade jael tethe value set karn mg pudh jael
console.log(user.fullName);  //  get fullNmae kade jael
console.log(user.first);  //   Here the first will change in the original object
 

//-------------------getter&setter for classes----------------------------------------------


class createUser{
     
    constructor(a,b,c){
        this.Name = a;
        this.surName  = b;
        this.age = c;
    }
    
    getBirthYear(){
        // console.log(fd);
        return 11
    }
    get FullName(){
        return this.Name +" "+this.surName
    }

    set FullName(value){
        const [firstname , lastname] = value.split(" ");
        this.Name = firstname;
        this.surName = lastname
    }

}

const user1 = new createUser("Yash","landge", 20)
// console.log(createUser.getBirthYear()); // error is not function
 
console.log(createUser.FullName);//Yash Landge
createUser.FullName = "sanjay landge"
console.dir(createUser.FullName); // "sanjay landge"

