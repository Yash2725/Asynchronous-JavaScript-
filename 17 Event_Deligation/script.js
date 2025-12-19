const addCardBtn = document.querySelector('.add-card')
const container = document.querySelector('.container')
let count = 1

// addCardBtn.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     newCard.addEventListener('click',(()=>{
//         newCard.remove()
//     }))
//     container.append(newCard)
// })


addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
  
    container.append(newCard)
    // console.log(newCard);
    // newCard.addEventListener('click' , ()=>{
    //     newCard.remove()
    // })
     
})



// Event Deligation
// hammm har yek chij ke upar eventlistener lganeki jgah uske parent ke upr evenlistner
// lgate hee esi proces ko event deligation bolte hee


//Event delegation is a technique where instead of adding 
// event listeners to multiple child elements,
//you add a single event listener to their parent element, 
// and use it to handle events for the children.
//  It's efficient and helps manage dynamic elements better.

container.addEventListener('click',(e)=>{
    let result = e.target;
    if(result !== container){
        result.remove()
    }
    
})




 