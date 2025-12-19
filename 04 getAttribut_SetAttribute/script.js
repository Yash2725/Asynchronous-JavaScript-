const attributeSelector = document.querySelectorAll('[name="yash"]')
console.dir(document.querySelectorAll('[name="yash"]'))


//-------- setAttribute-----------------

//  const h2setattribute =document.querySelector('h2')
const h2setattribute =document.querySelector('.Heading2')
 h2setattribute.setAttribute('H2',"setattributeonh2") 

document.querySelector('h1').setAttribute('id','heading');

// document.querySelector('h1').id="yash" // it change the id to yash
// document.querySelector('h2').class='don'// it dont change the class
//-------------- getAttribute-------------

const h2getattribute = document.querySelector('h2')

console.log(h2getattribute.getAttribute('class'));