//In JavaScript, the this keyword refers to the object that is
//  executing the current function. Its value is determined 
// by how a function is called, not where it's defined


// const user ={
//     firstname:"yash",
//     lastname:"landge",
//     age:20,
//     sayHii(){
//         console.log(this);  //it point to the Object i.e user
//         function fun(){
//             console.log(this);// it points to the window object
//         }
//         fun()
//     }
// }

//---------------------------------------
// const user ={
//     firstname:"yash",
//     lastname:"landge",
//     age:20,
//     sayHii:()=>{
//         console.log(this);  //it point to the Window Object
//          
//          
//     }
// }
//---------------------------------------

// const user ={
//     Name :"yash",
//     lName:"landge",
//     age:21,
//     arr:[1,2,4,6],
//     getage(){
//         // console.log(this.arr);
//         this.arr.forEach(function(el){
//             // console.log(el);
//             console.log(this); 
//         },this) //interview questions 
//     }
// }
// console.log(user.getage());

//------------------------------------------
// const user ={
//     Name :"yash",
//     lName:"landge",
//     age:21,
//     arr:[1,2,4,6],
//     getage(){
//         // console.log(this.arr);
//         this.arr.forEach((el)=>{
//             // console.log(el);
//             console.log(this); // it points to the user object
//         })
//     }
// }
// console.log(user.getage());
//--------------------------------------------------

// const user ={
//     Name :"yash",
//     lName:"landge",
//     age:21,
//     arr:[1,2,4,6],
//     getage:()=>{
//         // console.log(this.arr); // it point to the window object
//         this.arr.forEach(function(el){
//             // console.log(el);
//             console.log(this); // error
//         })
//     }
// }
// console.log(user.getage());

//--------------------------------------------------


const h1 =document.querySelector("h1")

// h1.addEventListener("click",(()=>{
//     console.log(this);  // in arraow function it points to the window object
// }))

//-----------------------------
// h1.addEventListener("click",function(){
//     console.log(this); // it points to the h1 tag
// })