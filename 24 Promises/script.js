//A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation and its result value.



//Promise is Special Type of the object 
// new Promise() new keyword likha to promise() function object retrurn karega
// There are three Promiese state by default pending ;fullfill;rejected

// promises handler like .then() , .catch() , .finally() are goes into microtask queue me chale jate hee 
// settimeout callback queue me jate hee 

// const p = new Promise((resolve, reject)=>{
//     // resolve() //=> PromiseState is :"fulfilled" ; it return undefined by default 
//     // resolve("Yash")  //=> return Yash
//     resolve({name:"Yash"})  //=> return Yash
//     // reject("Promise Rejected")
// })


// const p = new Promise((resolve , rejected)=>{
//     setTimeout(()=>{
//         resolve({name:"yash"})
//     },4000)
// })


// const resolvebutton = document.querySelector('.resolve-button')
// const rejectbutton = document.querySelector('.reject-button')

// const p = new Promise((resolve, rejected) => {
//     resolvebutton.addEventListener('click', () => {
//         resolve("Promise resolve")
//         // console.log(p);
//     })
//     rejectbutton.addEventListener('click', () => {
//         rejected("Promise Rejected")

//     })
// })

// // //promise resolve hone ke badd then ke under ka function call hoga

// p.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("finally"); // finally promise setteled hone ke bat run hota hee ;
// })                          // setteled means ya to fulfilled nahi to reject  dono mese yek



const p = new Promise((resolve, rejected) => {
    resolve("Promise resolve")
})

console.log(p);

const p2 = p.then((data) => {   // .then khudd yek promise return karata hee tu return keyword use nahi kela tari fkt console.log karr
    console.log(data); //Promise resolve
     })
    console.log(p2);
//.then(data => {
//    console.log(data); // 15
//    return "yash" })
//.then(data => {
//     console.log(data); //yash
//     return "true"
// }).catch(err => {   // .catch khudd yek promise return karata hee by deafult agar maine use console,log kiya to
//     console.log(err);
// })

// console.log(p2); // it return the promise


//---------------------------------------

const p4 = new Promise(()=>{
    // by defauld pending 
    // return "heloo"// pending
    // return new Promise(()=>{}) // pending
    // throw new Error("Error") // rejected

})



