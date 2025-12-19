const checkboxlist =document.querySelectorAll('.custom-checkbox')
const inputFields =document.querySelectorAll('.input-field')
const errorlabel = document.querySelector('.error-label')
const progressvalue =document.querySelector('.progrees-value')

let progress = 0;
checkboxlist.forEach((el)=>{
    el.addEventListener('click',(e)=>{
        const  allFieldsFilled = [...inputFields].every((el)=>{
             
            return el.value
        })

    if(allFieldsFilled) {   
        el.parentElement.classList.toggle('complited');
        
        const completedTasks = document.querySelectorAll('.complited').length;
        progress = (completedTasks / 3) * 100;

        progressvalue.style.width = `${progress}%`;
        progressvalue.querySelector('span').innerText = `${completedTasks}/3 completed`; 
         
    }
    else{
      errorlabel.parentElement.classList.add("show-error") 
    }
    })
})


inputFields.forEach((el)=>{
    el.addEventListener('focus',()=>{
        errorlabel.parentElement.classList.remove("show-error") 
    })
})