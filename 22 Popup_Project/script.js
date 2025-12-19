const button = document.querySelector('.click-button')
const close_icon = document.querySelector('.close-icon')
const container =document.querySelector('.contaniner')
const popup_container = document.querySelector('.popup-container')
const input = document.querySelector('input')
const subscribe =document.querySelector('.Subscribe')

button.addEventListener('click',((el)=>{
    el.stopPropagation
    container.classList.add('show-popup')
}))

close_icon.addEventListener('click',((el)=>{
    container.classList.remove('show-popup')
}))

popup_container.addEventListener('click',((el)=>{
    el.stopPropagation()
}))
container.addEventListener('click',((el)=>{
    container.classList.remove('show-popup')
}))


// input.addEventListener('input',((el)=>{
    
//     if(true){
//          subscribe.addEventListener('click',((el)=>{
//             container.classList.remove('show-popup')
//             }))
//     }
     
    
// }))

subscribe.addEventListener('click',((el=>{
     
    
    if(!input.value){
        alert("Please Enter the Email")
    }
     
     else{
        container.classList.remove('show-popup')
     }
    
})))
 
   