
const add = (a, b) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {

            if(a<0 || b<0)
            {
                return reject("Negative no. not allowed")
            }
            resolve(a+b)
        }, 1000);
    })
}

const doWork = async() =>{
    const sum = await add(1,2)
    const sum2 = await add(sum, 3)
    const sum3 = await add(sum2, -5)
    return sum3
}

// console.log(doWork())

doWork().then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})