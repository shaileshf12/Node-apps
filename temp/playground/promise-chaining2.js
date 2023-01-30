
require('../../task-manager/src/db/mongoose')
const Task = require('../../task-manager/src/models/task')

// Task.findByIdAndRemove('63ae94a5a7eae237bd0f93fd').then((task)=>{
//     console.log(task)
//     return Task.countDocuments()
// }).then((count)=>{
//     console.log(count)
// }).catch((err)=>{
//     console.log(err)
// })

// const t = new Task({description : "Eat", completed : true})
// t.save()

const taskRemoveAndCount = async (id) => {
    const task = await Task.findByIdAndRemove(id)
    console.log(task)
    const count = await Task.countDocuments({completed : true})

    return count
}

taskRemoveAndCount('63aedbe1f304127a33364195').then((count)=>{
    console.log(count)
}).catch((err)=>{
    console.log(err)
})