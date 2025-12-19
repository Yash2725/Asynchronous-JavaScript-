function makeHttpRequest(type, url) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json'

    const promise = new Promise((resolve, rejected) => {
        xhr.addEventListener('load', () => {
            resolve(xhr.response)

        })

        xhr.addEventListener('error', () => {
            console.log('Hii');
            rejected("Wrong Url")

        })

        //Without this listener, the code wouldn't know when the data is ready to use

    })
 
    xhr.open(type, url)
    xhr.send()
    
    return promise
     
} 


// makeHttpRequest('GET' , 'https://dummyjson.com/users',(usersdata)=>{
//     console.log(usersdata);
//     makeHttpRequest('GET' , `https://dummyjson.com/posts/user/${usersdata.users[0].id}`,(postsdata)=>{
//         console.log(postsdata);
//         makeHttpRequest('GET' , `https://dummyjson.com/comments/post/${postsdata.posts[0].id}`,(commentsdata)=>{
//             console.log(commentsdata.comments[0].id);
//            makeHttpRequest('GET' , `https://dummyjson.com/users/${commentsdata.comments[0].id}`,(id)=>{
//             console.log(id);
//            })
//         }  ) 
//     })
// })


makeHttpRequest('GET','https://dummyjson.com/users')
.then((usersdata)=>  {
    console.log(usersdata);
   return  makeHttpRequest('GET' , `https://dummyjson.com/posts/user/${usersdata.users[0].id}`)})
.then((postsdata)=> {
    console.log(postsdata);
    makeHttpRequest('GET' , `https://dummyjson.com/comments/post/${postsdata.posts[0].id}`)

})
// .then((comments )=>makeHttpRequest('GET' , `https://dummyjson.com/users/${comments.comments[0].id}`))
// .then((userData)=> console.log(userData))
// .catch((err)=>{
//     console.log(err);
// })