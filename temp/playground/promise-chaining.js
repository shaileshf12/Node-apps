
require('../../task-manager/src/db/mongoose')
const User = require('../../task-manager/src/models/user')

// User.findByIdAndUpdate('63ae872921591a1d951bd157', {age : 28}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age : 28})
// }).then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })


const userUpdateAndCount = async(id, age) =>{

    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

userUpdateAndCount('63ae872921591a1d951bd157', 45).then((count)=>{
    console.log(count)
}).catch((err)=>{
    console.log(err)
})