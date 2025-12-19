// try {
//     console.log(a);
// } catch (err) {
//     // console.log(err);
//     // console.log(typeof(err)); // Object
//     console.dir( err) // it give key:value object
//     console.log(err.message);
// }finally{
//     console.log('object');
// }

// console.log(3 + 4);

async function makeRequest() {
    try {
        const url = 'https://dummyson.com/users'
        const resp = await fetch(url)
        const data = await resp.json()
        console.log(data);

        return data
    }catch(err){
        // console.log(err.message);
        console.log("Somthindg Wait Wrong");
    }
}

makeRequest()