const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const form = document.querySelector('form')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})


// for(let i= 1;i<=100;i++){
//     addCardBtn.click()
// }


// const setin = setInterval(()=>{

//  // if(count>1000){
//  //     clearInterval(setin)
//  // }
//     addCardBtn.click()
// },10)


// setTimeout(() => {
//     clearInterval(setin); // Stops the interval
//     console.log("Interval stopped.");
//   }, 5000);




setTimeout(() => {

    input.focus()
}, 2000)

setTimeout(() => {

    input.blur()
}, 4000)


// setTimeout(()=>{
//     form.submit()
//     console.log('input submited');
// },5000)


// setTimeout(()=>{
//     form.reset()
// },3000)