//PromiseState : "fulfilled" by default
// Ek normal function undefind retrun karte pn
// we write bfore the function async keyword that by default
// return the promise when we console it 

// promises madhi hme data chahiye to hmm .then karke useke under callback function pass
// karte hee tb hme data milta hee
// but in await  ; await hi hme data deta hee 
// us data ko acceess karne keliye hm same jaise promes me karte hee vaisehii karna padega


// async function makeRequest(){
//     return "Hello" // promiseResult is Hello
// }



// function hii(){
//     console.log("Hello");

//     // throw "ERROR"
//     // throw new Error("Error in Program")
//     console.log("Huuu");
// }

//---------Promisestate rejected -------

// async function makeRequest(){
//      throw new Error("Error in Program")
// }

//----------------------------------
// What async really does:
// - It marks a function as asynchronous, allowing you to use the await keyword inside it.
// - It wraps the return value in a Promise. So even if you return a plain value, it becomes a Fullfilled Promise.


// async function makeRequest(){
//     const url = 'https://dummyjson.com/users'
//     fetch(url)
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data)})



// }

// console.log(makeRequest());

//---------------------------

// async function makeRequest(){
//     const url = 'https://dummyjson.com/users'
//     const resp = await fetch(url)  // PomiseRespone that are in promiseResult
//     console.log(resp);
//     console.log(add()); // this add() and below log are print after the resp
//     console.log("Heelll")
// }

// function add(){
//     return 5+6
// }

// makeRequest()
// console.log(add());


//---------------------------------


// async function makeRequest(){
//     const url = 'https://dummyjson.com/users'
// // debugger
//     const resp = await fetch(url)  // PomiseRespone that are in promiseResult
//     const data = await resp.json()
//     console.log(data);
// }
// makeRequest()

//-----------OR-----------
// async function makeRequest(){
//     const url = 'https://dummyjson.com/users'
//     const resp =  await (await fetch(url)).json()
//     console.log(resp);
// }
// makeRequest()

//---------------------------------------

// await is only valid in async functions 
// but we can use ouside the async funtion  ; in html file add type="module" attribute in the script tag
// type:module kelyavr  scope madhi yek module scope create hoto 
// yaa module scope madhi all varible jatat let , var, const all are goes into the module scope not into global or not in script scope

// const url = 'https://dummyjson.com/users'
// const resp = await fetch(url)  // PomiseRespone that are in promiseResult
// const data = await resp.json()
// console.log(data);
// // below log are print aftert the promise resolved
// console.log("object");

// function add(){
//     return 5+6
// }

// console.log(add());


//------------------------------------------


async function foo( ) {
      return "Hello World"
}

// const result = await foo() // we write type=moduel then it work
// console.log(result);

(async function (){
    const result = await foo()
    console.log(result);
})()

// function add(){
// let res = await foo()
// console.log(res);
// }

//----------NOTE-----------

// WE Can'T Use the Await in other normal function like in pure function , IEFE fucntion etc.