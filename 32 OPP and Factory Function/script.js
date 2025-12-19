// To Print The Current Year
console.log(new Date().getFullYear() );

// Encapsulation means bundling related data and methods together, and restricting direct access to some of the object's components.

// const user ={
//     myname:"yash",
//     lastName:"Landge",
//     age:22,
//     getBirthYear:(()=> new Date().getFullYear()-user.age )
// }

// Here we Bundle the MyName,lastname ,age,and Function that are in the single Object

// console.log(user?.getBirthYear());

// Abstraction:> we are Not Showing the Complexity to user

//-------------------------Factory Function------------------------

// It’s a function that returns a new object every time it’s called. 



// function createUser(firstName ,LastName ,age){
//     const user={
//         // Agar hamari key and value same name hee to yaise kar sakte hee it is not part of factory function
//         firstName ,
//         LastName,
//         age,
//         getBirthYear(){
//            return new Date().getFullYear()-user.age}  
//     }
//     return user
// }

// const user1 = createUser("Yash","Landdge",20)
// const user2 = createUser("Sayali","Landdge",22)


 
 