const input = document.querySelector("#username")
const paragraph = document.querySelector("p")
const form = document.querySelector('form')

// input.addEventListener("click",()=>{
//     console.log('click Enter your name');
// })

// input.addEventListener("dblclick",()=>{
//     console.log('douable click');
// })


let inputvalue;

// it give current value  in input tag

// input.addEventListener("input",(e)=>{
//     console.log(e);
//     // console.log(e.target.value);
//     // inputvalue = e.target.value;
//     // paragraph.innerText = e.target.value;

     
// })





// input.addEventListener("change",(e)=>{
//     console.log(e.target.value);
//     inputvalue = e.target.value;
//     paragraph.innerText = e.target.value;

//     // console.log('Writting Start');
// })



// input.addEventListener("focus",(e)=>{
//     // console.log(e.target.value);
//     inputvalue = e.target.value;
//     paragraph.innerText = e.target.value;
//     //  console.log(e.target.value);
//     // console.log('Writting Start');
// })




// input.addEventListener("blur",(e)=>{
//     // console.log(e);
//     // console.log(e.type);
//     console.log(e.target.value);
//     inputvalue = e.target.value;
//     paragraph.innerText = e.target.value;

//     // console.log('Writting Start');
// })




form.addEventListener('submit',(e)=>{
    // e.preventDefault()
    console.log(e);
     
})


//-------------------------------------------------

// form.addEventListener('input',(e)=>{
//     e.preventDefault()  //Prevents the form from submitting and reloading the page
//     console.log(e.target.value); // ha form madhil kontyhii element vr click kela tr to element deto
//     console.log(e.currentTarget); // currrentTarget jya element varti event lavla aahe toch element deto
// })

