const user = {
    name: "Yash",
    lastName: "Landge",
    age: 22,
    address: {
        city: "nahik",
        Yash: "hmm"
    },
    getfullName: function () {
        return user.name + " " + user.lastName
    }

}
const a = "city"
// console.log(user.address && user.address.city);
console.log(user.address ?.city); //agar user.address true hee to hii aage badhoo nahi to yahi value dedo 
//********************************************************* */
// console.log(user?.address ?.city); //- If either user or user.address is undefined or null, 
// it won’t throw an error — it will just return undefined.


console.log(user.address ?.["Yash"]);
// console.log(user.address ?.[a]);N

// console.log(user.getfullName?.());// agra user.getfullname exit karti hee to hii call karo


//--------------------nullish coalescing operator(??)---------------------------------------------------

// That line uses the nullish coalescing operator(??), 
// which is a feature in JavaScript introduced in ES2020

//const city = user.address ?? "Unknown";
// “If user.address is not null or undefined, use its value.
//  Otherwise, use "Unknown" as the default.”
