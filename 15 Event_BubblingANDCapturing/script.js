const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')


window.addEventListener('click' , (e)=>{
    // e.stopPropagation()
    console.log('window Event Listener');
})


// capture:true or true ==> haa event bubbling chi sequence chya ult aste 
// means appn  blue vrti click kele ki phile window click tyannantr document, tyanantr body and soon its child

document.addEventListener('click' , (e)=>{
    console.log('Document Event Listener');
})


document.body.addEventListener('click' , (e)=>{
    console.log('Body Event Listener');
})


green.addEventListener('click' , (e)=>{
    e.stopPropagation()
    console.log('Green Event Listener');
})

pink.addEventListener('click',(e)=>{
    console.log('Pink Event Listner');
})

// blue.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     console.log('Blue Event Listner');
// }, {capture:true})


//----------- once:true------------

// blue.addEventListener('click',(e)=>{
//     // e.stopPropagation()
//     console.log('Blue Event Listner');
// }, {once:true})

// OR

// blue.addEventListener('click',(e)=>{
//     // e.stopPropagation()
//     console.log('Blue Event Listner');
// }, {capture:true , once:true})