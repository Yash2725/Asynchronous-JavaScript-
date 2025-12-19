// class createUser{

// }

// console.log(createUser);
// console.log(typeof(createUser)); // funtion

// console.log(new createUser);



// class createUser {

//     constructor(a,b,c){
//         // console.log(a,b,c);
//         // console.log(this);
//         this.firstName = a;
//         this.lastName = b;
//         this.age = c
//     }


//     getBirthYear() {
//         console.log("hiiiiiiiiiiiiii");
//         return new Date().getFullYear() - this.age
//     }
//     getFullName() {
//         return this.firstName + " " + this.lastName
//     }
// }


// const user1 = new createUser("yash" ,"landge",25)
// const user2 = new createUser("sayali" ,"vae",55)
 
// console.log(user1);
// console.log(user2);
// console.log(user1.getBirthYear());
// console.log(user2.getFullName());



// ---------------------Run time polymorphism in js--------------------

// class Animal {
//   speak() {
//     console.log("The animal makes a sound.");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("The dog barks.");
//   }
// }

// class Cat extends Animal {
//   speak() {
//     console.log("The cat meows.");
//   }
// }

// // Function demonstrating runtime polymorphism
// function makeAnimalSpeak(animal) {
//   animal.speak(); // Calls the appropriate method based on the actual object
// }

// const dog = new Dog();
// const cat = new Cat();

// makeAnimalSpeak(dog); // Output: The dog barks.
// makeAnimalSpeak(cat); // Output: The cat meows.