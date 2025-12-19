const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const p = document.createElement('p')

// Create new p element in document that are Created after Script Elemnt

// document.body.appendChild(p) // It Append after the Script Elemnt
// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))


 
// const img = document.querySelector("img")

// for (let i = 2; i <=100; i++) {
//     const newimage = img.cloneNode()
//     newimage.src =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`  
//     container.append(newimage)
// }




//-------------------document.createElement(x)---------------

// Create a Valid Element
console.log(document.createElement('img'));
//creat any InValid HTML element 
console.log(document.createElement('Yash'));


// Create new p element in document that are Created after div

const paragrap = document.createElement('P') // aapn P capital madhi lihila tari to small madhi jato
paragrap.innerText ="Hello World!!!"
console.log(container.appendChild(paragrap));

paragrap.classList.add("My-Class");
paragrap.id="Yash";
paragrap.title="King"

    
 
// for(let i=10;i<50;i++){
//     const newImage =document.createElement('img')
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//     container.append(newImage)
// }



//
// [[Prototype]]:HTMLUnknownElement

const yash = document.createElement('YASH')
console.dir(yash)



















const newdiv = document.createElement('div')
container.append(newdiv)
 
newdiv.classList.add('newdivflex')



// for(let i=6;i<50;i++){
//     const innerdiv =document.createElement('div')
//     newdiv.append(innerdiv)

//     const newImage =document.createElement('img')
//     const  paragra = document.createElement('p');


//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//     paragra.innerText = i
    
//     innerdiv.append(newImage,paragra)
     
//   }





//<<<========== Simple form of above code ===============>>>>>>


// for(let i=6;i<51;i++){
//     const innerdiv =document.createElement('div')
//     newdiv.append(innerdiv)

//     const imgContainer = `
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//     <p>${i}</p>

//     `

//     innerdiv.innerHTML = imgContainer

    
// }






//<<<================ OR =====================>>>>>



// let MyHTML = ``

// for(let i=5;i<51;i++){

//     MyHTML+=`<div>
//                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//                 <p>${i}</p>
//             </div>   `

//     newdiv.innerHTML= MyHTML   ;      
// }


// let count = ``
// for(let i=5;i<=50;i++){
//     count+=`<div>
//                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//                 <p>${i}</p>
//           </div> `  
//     newdiv.innerHTML=count 
    
      
// }


  









 


 

 
