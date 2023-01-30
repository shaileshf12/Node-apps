
const fs = require('fs')

const data = fs.readFileSync('./1-json.json')

const jsonData = data.toString()

const parsedData = JSON.parse(jsonData)

parsedData.name = 'Mack'
parsedData.age = 40

const finalData = JSON.stringify(parsedData)

fs.writeFileSync('1-json.json', finalData)