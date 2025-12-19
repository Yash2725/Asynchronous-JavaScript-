const addimg = document.querySelector('.add-img')
const removeimg = document.querySelector('.remove-img')
const container =document.querySelector('.container')

let i=1


let addremove = []
let add_function = ()=>{
    let newdiv = document.createElement("div");
     
    newdiv.innerHTML = `<div class="flexdiv">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
                <p>${i}</p>
                </div>`
    addremove.push(newdiv)            
    i++

     
container.append(newdiv)

}

let removefunction =()=>{
    let move = addremove.pop()
    move.remove()
}

addimg.addEventListener('click',add_function)
removeimg.addEventListener('click',removefunction)


