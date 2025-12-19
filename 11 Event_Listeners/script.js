const heading = document.querySelector('h1')
const container2 =document.querySelector('.container2')
const cardAdd =document.querySelector('.add-card') 
const cardRemove =document.querySelector('.remove-card') 




function sayHii(){
    console.log('Hello');
}

// heading.onclick = sayHii


// heading.addEventListener('click',sayHii)
// heading.addEventListener('click',function(){
//     console.log('object');
// })

let divsremove=[];
let count=1;
const  card2function = (()=>{
    const newdiv =document.createElement('div')
    newdiv.classList.add('card2')
    newdiv.innerText=count++;
     
    container2.append(newdiv)

    divsremove.push(newdiv)
       
})



//***************OR********** */


// clone add card function

// const clonefunction = (()=>{
//     const newCard = document.querySelector('.add-card')
//     const clone= newCard.cloneNode()
//     clone.classList.remove('add-card')
//     clone.innerText = count++;
//     container2.append(clone)
// })



// remove function

const removeCardFunction =(()=>{
    //  const div = document.querySelector('.remove');
    //  div.remove()

    if(divsremove.length===0){
         alert("Not Sufficient cards to delet")
    }
    else{
        const div = divsremove.pop()
    div.remove();
    count--;
    }
    
      
     
})

function print(){
    console.log("Card Printed on Screen");
}

cardAdd.addEventListener('click',card2function)
// We Pass multiple function in Single EventListener
// cardAdd.addEventListener('click',function(){card2function(), print()})
cardRemove.addEventListener('dblclick',removeCardFunction)
cardAdd.addEventListener('click',function(){card2function(),console.log("Card2Function Activated");})

