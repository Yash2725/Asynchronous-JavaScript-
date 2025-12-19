const h1 = document.querySelector('h1')
const container = document.querySelector(".container")

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
//creat any element 
console.log(document.createElement('Yash'));


// Create new p element in document that are Created after Script Element

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

const yash = document.createElement('yash')
console.dir(yash)



















const newdiv =document.createElement('div')
document.body.append(newdiv)
 
newdiv.classList.add('newdivflex')



// for(let i=6;i<50;i++){
//     const innerdiv =document.createElement('div')
//     newdiv.append(innerdiv)

//     const newImage =document.createElement('img')
//     const  paragra = document.createElement('p');

//     paragra.innerText = i
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    
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



let MyHTML = ``

for(let i=5;i<51;i++){

    MyHTML+=`<div>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
                <p>${i}</p>
            </div>   `

    newdiv.innerHTML= MyHTML   ;      
}
 






//<<<<<<+=====================Remove Element in js======================>>>>>>>>>>>



const removechild =document.querySelector("body > div.newdivflex > div:nth-child(6)")

//  removechild.remove()
 //-------OR----------
 removechild.parentElement.removeChild(removechild)


 

// h1.remove()

 
// newdiv.remove()

//Question
// Remove the element witout using remove inbuild function
//  newdiv.parentElement.removeChild(newdiv)
