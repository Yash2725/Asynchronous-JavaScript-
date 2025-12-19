const h1 = document.querySelector('h1')

const input = document.querySelector('input')



// keypress:

// Triggered when a printable character is pressed (e.g., letters, numbers, symbols).
// Does not fire for non-printable keys like Shift, Ctrl, Arrow keys, etc.


// input.addEventListener('keypress',(event)=>{
//     console.log(event);
//     console.log(event.key);
// })



// h1.addEventListener('keypress' ,(e)=>{
//     console.log(e.key);
// })


// Fires continuously if the key is held down (auto-repeat).
// window.addEventListener('keypress',(e)=>{
//     console.log("CODE:", e.code);
//     console.log("VALUE:",e.key);
// })


// window.addEventListener('keyup',(e)=>{
//       console.log("CODE:", e.code);
//     console.log("VALUE:",e.key);
// })





// keydown , keyup:

// Triggered when a key is pressed down (i.e., the key is physically pressed).
// Fires for all keys on the keyboard, including special keys like Shift, Ctrl, Arrow keys, etc.
// Fires continuously if the key is held down (auto-repeat).


// window.addEventListener('keydown',(e)=>{
//     console.log("CODE:", e.code);
//   console.log("VALUE:",e.key);
// })