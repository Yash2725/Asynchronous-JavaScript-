//1) appendChild return the element append not return the element which we are appended
//2) appendChild does not append the text but "append"  appended the text 
//3) appendChild does not append the multiple element but append add multiple element 



const h1 = document.querySelector('h1')

const container =document.querySelector('.container')
const card = document.querySelector('.card')

// appendChild kelyavrti to element direct container madhi jael
// means tyachya original position pasun cut hoel aani 
// container madhi past hoel last la

// container.appendChild(h1) 
 

// Aani jr copy past kraych asen tr cloneNode

// container.appendChild(h1.cloneNode(true))

// container.appendChild(card.cloneNode(true))

// jevhapn apn cloneNode madhi true takto tevha text milto
// for(let i=2; i<101;i++){
//     const newCard =card.cloneNode()
//     newCard.textContent= i
//     container.appendChild(newCard)
// }




//******************************************************** */



// with the help of *********" appendChild we can append the parent inside the child"
// appendChild cha use karun aapn tya child madhi tyacha parent pn taku shakto
// container.appendChild(document.body.cloneNode(true))
// card.appendChild(container.cloneNode(true))


//======>Key Differnce <====

// console.log(container.appendChild(h1)); // it return h1 in console  & h1 is appended in container
// console.log(container.append(h1) );  // it return undefind in console but h1 is appended in container


console.log(container.append('Hello !!!  ')); 
// console.log(container.appendChild("Hmmm"));  // it give error
//to resolve above error
// const newText = document.createTextNode(" Hmmm ")
// console.log(container.appendChild(newText));


// console.log(container.append(' Yash '," King"));
// console.log(container.appendChild('Yash','King')); //it give error
// console.log(container.appendChild(h1,container,card));   // first value ch append karin
// console.log(container.append("yasjh",card.cloneNode(true)));


// console.log(h1.cloneNode(true));
// console.log(container.append(h1.cloneNode(true)));


// console.log(container.append(h1));



//-------------------------------------------------------------------------------------
// child element madhi parent elemnt pn append hoto
// console.log(card.appendChild(document.body.cloneNode(true)));
// console.log(card.appendChild(container.cloneNode(true)));
// console.log(card.append(document.body.cloneNode(true)));

  