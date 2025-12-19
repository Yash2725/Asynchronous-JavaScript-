// fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then(data => console.log(data.products[0].images
// ))


// fetch("https://dummyjson.com/products/add", {
//     method: 'POST',
//     body: JSON.stringify({
//         title: "BMW",
//         category: "Stationary"
//     })
// })
//     .then((res) => res.json())
//     .then(data => console.log(data))




fetch('https://dummyjson.com/users')
   .then((res) => res.json())
   .then((usersdata) => {
        console.log(usersdata);
        return fetch(`https://dummyjson.com/posts/user/${usersdata.users[0].id}`)})
    .then((res) => res.json())    
    .then((postsdata)=>{
        console.log(postsdata);
        return fetch(`https://dummyjson.com/comments/post/${postsdata.posts[0].id}`)})
    .then((res) => res.json())
    .then((Comments)=>{
        console.log(Comments);
        return fetch(`https://dummyjson.com/users/${Comments.comments[0].id}`)})
    .then((res)=>res.json()) 
    .then((data)=>{
        console.log(data) })       
    .catch((err)=>{
        console.log("err")}) 