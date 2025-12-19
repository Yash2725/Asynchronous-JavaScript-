const LocalName= document.querySelector('.name-tag')
const inputname = document.querySelector('.inputname')
const inputage = document.querySelector('.inputage')
const  agetag = document.querySelector('.age-tag')
 

// LocalName.innerText = localStorage.name

 

// inputname.addEventListener('input',(e)=>{
//         localStorage.myName = e.target.value
//         LocalName.innerText = localStorage.myName
// })



// inputname.addEventListener('input',(el)=>{
//     localStorage.name = el.target.value;
//     LocalName.innerText = localStorage.name
// })



//*************OR************************** */
// LocalName.innerText = localStorage.getItem('myName')


// inputname.addEventListener('input',(e)=>{
//     localStorage.setItem('myName',e.target.value);
//     LocalName.innerText = localStorage.getItem('myName')
// })


// inputname.addEventListener('input',(el)=>{
//     localStorage.setItem('name',el.target.value);
//     LocalName.innerText = localStorage.getItem('name')
// })





// inputage.addEventListener('input',(element)=>{
//     localStorage.setItem('age',element.target.value);
//     agetag.innerText = localStorage.getItem('age') 
// })


//************************************************ */

const myData =  JSON.parse(localStorage.getItem('userdata')) ||{}
// console.log(myData.name);// undefined
if(myData.name){
    LocalName.innerText = myData.name
}
 if(myData.age){
    agetag.innerText =myData.age
 }

inputname.addEventListener('input',(el)=>{
    myData.name = el.target.value;
    localStorage.setItem('userdata',JSON.stringify(myData));
    LocalName.innerText = myData.name
     
}) 


//  JSON.stringify(myData)// to convert the key: value in string
// JSON.parse(myData)// convert back to previous object


inputage.addEventListener('input',(el)=>{
    myData.age = el.target.value;
    localStorage.setItem('userdata',JSON.stringify(myData));
    agetag.innerText =myData.age
     
})




//******** toclear all data***** */

// localStorage.clear()

//**********toclear single data */

localStorage.removeItem('userdata')
 


