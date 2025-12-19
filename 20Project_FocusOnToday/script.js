// const checkboxlist = document.querySelectorAll('.custom-checkbox')
// const goalinput = document.querySelectorAll('.goal-input')
// const errormessage = document.querySelector('.progress-bar')
// const progressValue = document.querySelector('.progress-value')
// const progressLabel = document.querySelector('.progress-label')

// const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {
//     first:{
//         name:'',

//     },
//     secound:{
//         name:''
//     },
//     third:{
//         name:''
//     }
// }



// let completedgoalCount = Object.values(allGoals).filter((el) => { return el.completed }).length
// const  allProgresLabel = [
//     "Raise the bar by completing your goals!",
//     "keep going!",
//     "Just a step away, keep going!",
//     "Congratulation You are Done 👏👏👏"
//      ]
// progressValue.firstElementChild.innerText = `${completedgoalCount}/3 completed`
// progressValue.style.width = `${(completedgoalCount / 3) * 100}%`

// progressLabel.innerText = allProgresLabel[completedgoalCount] 


// checkboxlist.forEach((checbox) => {
//     checbox.addEventListener('click', (check) => {
//         const allInputCheck = [...goalinput].every((input) => {
//             return input.value
//         })

//         if (allInputCheck) {
//             checbox.parentElement.classList.toggle('completed')

//             const inputcheck = checbox.nextElementSibling.id
//             allGoals[inputcheck].completed = !allGoals[inputcheck].completed

//             completedgoalCount = Object.values(allGoals).filter((el) => { return el.completed }).length

//             progressValue.firstElementChild.innerText = `${completedgoalCount}/3 completed`
//             progressValue.style.width = `${(completedgoalCount / 3) * 100}%`

//             progressLabel.innerText = allProgresLabel[completedgoalCount] 

//             localStorage.setItem('allGoals', JSON.stringify(allGoals))
//         } else {
//             errormessage.classList.add('show-error')
//         }
//     })
// })

// goalinput.forEach((el) => {

//     el.value = allGoals[el.id].name
//     if (allGoals[el.id].completed) {
//         el.parentElement.classList.add('completed')
//     }
//     el.addEventListener('focus', (() => {
//         errormessage.classList.remove('show-error')
//     }))

//     el.addEventListener('input', (event) => {
//         if (allGoals[el.id].completed) {
//             el.value = allGoals[el.id].name
//             return
//         }
//         allGoals[el.id] = {
//             name: el.value,
//             completed: false,
//         }
//         localStorage.setItem('allGoals', JSON.stringify(allGoals))
//         console.log(allGoals);
//     })

// })



//-----------------------------------------------------------------------------------------


const checbox = document.querySelectorAll('.custom-checkbox')
const inputs = document.querySelectorAll('.goal-input')
const errormessage = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')
const allGoals =JSON.parse(localStorage.getItem('allGoals') ) || {
    first:{
        name:''
    },
    secound:{
        name:''
    },
    third:{
        name:''
    }
}

let  completedCount = Object.values(allGoals).filter((el)=> el.completed).length
progressValue.style.width = `${(completedCount/3)*100}%`
 
progressValue.children[0].innerText = `${completedCount}/3 completed`

checbox.forEach((checkbox)=>{
    
    checkbox.addEventListener('click',(event)=>{
         const inputFieldFill = [...inputs].every((element)=>{
            return element.value
         })

         if(inputFieldFill){
            
            checkbox.parentElement.classList.toggle('completed')
            let inputids =checkbox.nextElementSibling.id
            allGoals[inputids].completed =!allGoals[inputids].completed
            completedCount = Object.values(allGoals).filter((el)=> el.completed).length 
            progressValue.style.width = `${(completedCount/3)*100}%`
            progressValue.children[0].innerText = `${completedCount}/3 completed`
           
            localStorage.setItem('allGoals',JSON.stringify(allGoals))

         } else{
            errormessage.classList.add('show-error')
         }
    })
})

inputs.forEach((el)=>{
    el.value = allGoals[el.id].name

     if(allGoals[el.id].completed){
        el.parentElement.classList.add('completed')
     }
     

    el.addEventListener('focus',(input)=>{
        
        errormessage.classList.remove('show-error')
    })

     
     
     el.addEventListener('input',(input)=>{
        if(allGoals[el.id].completed){
         el.value =allGoals[el.id].name
         return
     }
        allGoals[el.id] = {
        name:el.value,
        completed:false,
     }
    localStorage.setItem('allGoals',JSON.stringify(allGoals))
     })
})

