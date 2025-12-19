const paragraph = document.querySelector('p')

// console.log(paragraph.innerHTML);




const li =document.querySelector('li')

console.log(li.innerText);
console.log(li.textContent);


// innerHTML cha use karun appn HTML set Kru Shkto
// pn innerText AND TextContent cha use karun Aapn HTMl set "NAHI" kAru shakt

// paragraph.innerHTML = '<h4>Hii</h4>' // on web page print Hii
// paragraph.innerText = '<h4>Hii</h4>' //on web page print  '<h4>Hii</h4>'
paragraph.textContent = '<h4>Hii</h4>' //on web page print  '<h4>Hii</h4>'


// Differnce  Between  innerText & textContent
//1) innerText madhi sapce include nahi hot anni textcontent 
//madhi space include hoto jevha console karto tevha
//2) jr index.html madhi aapn yekhadya element varti <b hidden> Frontend development </b> (hidden hi properti takle)
// tr aaplyala console madhi innerText kelyavrti ya element madhil
//content disnar nahii -- ya ult TextContent kelyavarti console madhi disen


// console.log(paragraph.innerText);

// console.log(paragraph.textContent);

 