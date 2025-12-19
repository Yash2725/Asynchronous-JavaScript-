function makeHttpRequest(method , url,callback) {
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'
    xhr.addEventListener('load', () => {
        console.log(xhr.response.users);
        callback(xhr.response)
    })

    xhr.open(method , url)
    xhr.send()
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
