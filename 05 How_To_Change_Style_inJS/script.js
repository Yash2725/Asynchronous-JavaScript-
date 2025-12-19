const color =document.querySelector('h1') 
color.style.color = "green"
color.style.backgroundColor = "pink";


const anchur = document.querySelectorAll('a')
for(let i=0;i<anchur.length;i++){
    anchur[i].style.backgroundColor="hotpink"
}
 

for(const link of anchur){
    link.style.color= 'red';
    link.style.textDecorationLine = 'none';
    link.style.fontWeight ='700';
    link.style.fontFamily ='cursive';


// console.log(link.style.cssText); // inline jevhdipn style dili aahe ti disen

    // link.style.cssText =`
    // color:red;
    // font-size:32px;
    // font-weight:700;
    // font-family:cursive;
    // `



    link.className ='green-link';// className hi class add karin pn ji pn existing class aahe delete karin mg hee class add karin
//to ADD Multiple classes
    link.className ='green-link wavy-link may-link';


//to ADD Multiple classes
    // link.setAttribute('class','green-link')


//toggel means class allready index.html me present hee to remove karo nahi he to lga do
    // link.classList.toggle("green-link") 
    // link.classList.toggle("green-link")

// Add other one  Class or Remove class
    // link.classList.add('green-link')
    // link.classList.remove('may-link')
}

// Add multiple classes or add single class with the help of classList
// document.querySelector('h1').classList.add( 'green-link','may-link')




// const setColor = document.querySelector("a")



 

// setColor.className = "pink"


