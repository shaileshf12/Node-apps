
// const geocode = (address, callback) =>{
//     const data = {
//         latitude : 0,
//         longutude : 0
//     }

//     setTimeout(()=>{
//         callback(data)
//     }, 2000)
// }

// geocode('Mumbai', (data)=>{
//     console.log(data)
// })

console.log("Hello")

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a+b)
    }, 2000);
}


add(1, 4, (sum)=>{
    console.log(sum)
})