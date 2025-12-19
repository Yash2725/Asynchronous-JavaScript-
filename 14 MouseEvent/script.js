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
    newdiv.classList.add('card2','remove')
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

    const div = divsremove.pop()
    div.remove()
      
     
})

// cardAdd.addEventListener('mousedown',card2function)
// cardRemove.addEventListener('mouseup',removeCardFunction)

// cardAdd.addEventListener('mouseenter',card2function)
// cardRemove.addEventListener('mouseleave',removeCardFunction)


// cardAdd.addEventListener('mousemove',card2function)
// cardRemove.addEventListener('mouseout',removeCardFunction)

// cardAdd.addEventListener('mouseover',card2function)
// cardRemove.addEventListener('mouseup',removeCardFunction)

// cardAdd.addEventListener('wheel',card2function)
// document.cardRemove.addEventListener('scroll',removeCardFunction)



// touch event are work on touch screeb (mobile)

// cardAdd.addEventListener('touchstart',card2function)
// cardRemove.addEventListener('touchend',removeCardFunction)


// cardAdd.addEventListener('touchmove',card2function)
// cardRemove.addEventListener('touchend',removeCardFunction)


// drag are work only on dekstop
// heading.addEventListener('drag',card2function)
// cardRemove.addEventListener('touchend',removeCardFunction)




//----------------  pointer event----------------


// it work on both dekstop and touch screen (mobile)

// cardAdd.addEventListener('pointermove',card2function)
// cardRemove.addEventListener('touchend',removeCardFunction)

// cardAdd.addEventListener('pointerenter',card2function)
// cardRemove.addEventListener('touchend',removeCardFunction)

// cardAdd.addEventListener('pointerleave',card2function)
// cardRemove.addEventListener('touchend',removeCardFunction)