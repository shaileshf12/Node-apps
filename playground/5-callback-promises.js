
// const doWorkCallback = (callback) =>{
//     setTimeout(() => {
//         // callback('Error occured', undefined)
//         callback(undefined,[1,4,7])
//     }, 2000);
// }

// doWorkCallback((err, res)=>{
//     if(err)
//     {
//         return console.log(err)
//     }
//     console.log(res)
// })



const doWorkPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        // resolve([6,8,3])
        reject("Error occured")
    }, 2000);
})

doWorkPromise.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})


function resolveAfter2Seconds() {
    console.log('Hello')
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    const result = await resolveAfter2Seconds();
    console.log(result);
    console.log('calling');
    // expected output: "resolved"
  }
  
  asyncCall();

  console.log('End')