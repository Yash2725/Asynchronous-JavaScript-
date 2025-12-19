// function getBirthYear(){
//     console.log(this); // here the this points to window
// }
// getBirthYear()
//---------------------------------------------

// function getBirthYear(){
//     return new Date().getFullYear() - this.age  // Here this is point to the user object becuase we pass there  getBirthYear
// }

// function createuser(firstName,LastName,age){
//     const user = {
//         firstName,
//         LastName,
//         age,
//         getBirthYear,
//     }

//     return user
// }

// const user1 = createuser("Yash", "Landge",20)
// console.log(user1);
// console.log(user1.getBirthYear());

// const user2 = createuser("Sayali", "Landge",22)
// console.log(user2.getBirthYear());

// console.log(user1.getBirthYear === user2.getBirthYear);

//---------------------2nd way-------------------------------------------------


// function createuser(firstName,LastName,age){
//     const user = {
//         firstName,
//         LastName,
//         age,
//         JayantiDivas:createuser.commonMethod.getBirthYear
//     }

//     return user
// }
// ===>> Behind the since the function is the object  that why we add .commonMethod Key on the funtion its value is the inside the {}
// if you console.dir() then its give the commonMethod key and its value

// createuser.commonMethod = {
//     getBirthYear:function() {
//     return new Date().getFullYear() - this.age  // Here this is point to the user object becuase we pass there the getbirthYear
// }

// }

// const user1 = createuser("Yash", "Landge",20)
// console.log(user1);
// console.log(user1.JayantiDivas());

// const user2 = createuser("Sayali", "Landge",22)
// console.log(user2.JayantiDivas());

// console.log(user1.JayantiDivas === user2.JayantiDivas);


//-----------------------------------------------------------------------

//  function add(){

// }
// console.log(add()); // undefined
// console.log(new add()); // it return the empty object  if we return in the function or not

//############### Constructor Function---------------------------------------------
//********Jb hm kisi bhi function ko new ke sath call karete hee to use Constructor Function Kahte Hee********** */
// we use constructor function because of not creating multiple object for multiple users at function calling time
//  function add(){
//     console.log(this);
// }
// console.log(add()); // this is points to the window object
// console.log(new add()); // it return the empty object  if we return in the function or not
                        // and this also points to that empty object(add{}) and conosel it 
 

//---------------------------------------------------------------------------------------


// function createUser(firseName ,labsName , age){
//     this.Name = firseName;
//     this.SurName = labsName;
//     this.Age = age
// }


// // const user1 =  createUser("Yash", "Landge",20)
// // console.log(user1); // undefined

// // console.log(window.Name); // Yash
// // console.log(window.SurName); // Landge
// // console.log(window.Age); // 20
 
// const user1 = new createUser("Yash", "Landge",20)
// console.log(user1); // o/p is createUser Object with key value



//------------------------------------------------------------

// function CreateUser(firseName ,labsName , age){
//     this.Name = firseName;
//     this.SurName = labsName;
//     this.Age = age
// }

// CreateUser.prototype.getBirthYear = function(){
//     return new Date().getFullYear() - this.Age
// }
// CreateUser.prototype.getFullName = function(){
//     return  this.Name+ " "+this.SurName
// }

// const user1 = new CreateUser("Yash", "Landge",20)
// console.log(user1);

// console.log(user1.getBirthYear());
// console.log(user1.getFullName());
 




//------------------------------

function Add(){
    // return "hello"
    return {
        name:"yash"
    } // here we pass array or function the o/p is this what we pass
}
let result = new Add
// console.log(result); // empty object
console.log(result); // return object