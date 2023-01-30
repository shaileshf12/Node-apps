
const http = require('http')

const url = `http://api.weatherstack.com/current?access_key=68e50f7055a31609b26fe9e12d51bf93&query=Delhi&units=m`

const request = http.request(url, (res)=>{
    let data = ''

    res.on('data', (chunks)=>{
        data+=chunks.toString()
    })

    res.on('end', ()=>{
        console.log(JSON.parse(data))
    })
})

request.on('error', (error)=>{
    console.log(error)
})

request.end()