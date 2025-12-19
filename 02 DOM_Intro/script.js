 function sayHii(){
    document.body.children[5].src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAcCQTp6jMR-GP6N8-lpccALnMtVyeX6LqA&s' ;
    document.body.children[0].innerHTML ="Hello World"

 }

//  sayHii()


//  function hotel(){
//    document.body.children[7].children[5].src ='https://media.gettyimages.com/id/1388409529/photo/woman-lying-down-on-bed-and-using-smart-phone-at-night.jpg?s=612x612&w=0&k=20&c=IH7VJACmxjTjguA3ZxFfBwtaHwoFi6-v7PTDaJ5VvZw='
//  }



// ************************ All Elements ********************

const allImages1 = document.getElementsByTagName('img')
console.log(allImages1); // give MTMLCollection
// it give the Array Like HTML collection 
// const h2 =document.getElementsByTagName("h2")
// console.log(h2); // the o/p is in Array like html collection not array


// jyachya madhi "Elements"  ha word  aahe te o/p madhi Array 

// Element is a pural word



const cssImages = document.getElementById('cssid')
console.log(cssImages);

// const className = document.getElementsByClassName("cssimage")
  
const css = document.querySelector('.cssimage');
console.log(css);   
 
// itgive the NodeList 
const CSSIMAGE = document.querySelectorAll('#CSSIMAGE')


const jsimg = document.querySelector('[alt="javascript"]')


// const ul = document.querySelector('ul li i')
// ul.innerHTML = "<b>YASH</b>"
 

// const jsimg = document.querySelector('[alt="javascript"]')
// jsimg.src  ="https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw="

// const allimages =document.querySelectorAll('img')
// const allimages =[...document.images] // ===>>it work only on images
const allimages =[...document.querySelectorAll("#CSSIMAGE")]

const imageURl =[
    "https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=",
    "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"
]


// for(let i=0;i<allimages.length;i++){
//     allimages[i].src  = imageURl[i]
// } 

 
// allimages.forEach((element,index)=>{
//         element.src = imageURl[index]
// })

// The NodeList Can't Work With map
allimages.map((el,i)=>{
    el.src = imageURl[i]
})



// const ul =document.querySelector('ul')
// const inside_ulimg = ul.querySelector('img')