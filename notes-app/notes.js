
// const getNotes = ()=>{
//     return "Your notes"
// }

const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
    const data = loadNotes()

    // const duplicate = data.filter((note)=>note.title===title)
    const duplicate = data.find((note)=>note.title===title)


    if(!duplicate)
    {
        data.push({title:title, body:body})
        saveNotes(data)
        console.log(chalk.green.inverse("Note added"))
    }
    else
    {
        console.log(chalk.red.inverse("Duplicate note"))
    }
    
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const data = dataBuffer.toString();
        const jsonData = JSON.parse(data)
        return jsonData

    } catch (error) {
        return []
    }
}

const removeNote = (title) => {
    const data = loadNotes();

    if(data.length==0)
    {
        console.log(chalk.red.inverse("No note available"))
        return ;
    }

    const filteredData = data.filter((note)=>note.title!==title)

    if(filteredData.length!==data.length)
    {
        saveNotes(filteredData)
        console.log(chalk.green("Note removed successfully"))

    }
    else{
        console.log(chalk.red.inverse("Note not found"))
    }

    
}

const saveNotes = (notes) => {
    const newData = JSON.stringify(notes)

    fs.writeFileSync('notes.json', newData)
}

const listNotes = () =>{
    const notes = loadNotes();

    console.log(chalk.white.bold("Your notes"))
    notes.forEach(element => console.log(element.title));
}

const readNote = (title) =>{
    const notes = loadNotes();
    const note = notes.find((note)=>note.title==title)

    if(note)
    {
        console.log(note.title, note.body)
    }
    else
    {
        console.log('Note not found')
    }
}


module.exports = {addNotes, removeNote, listNotes, readNote};