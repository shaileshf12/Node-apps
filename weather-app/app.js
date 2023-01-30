
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const place = process.argv[2]

if(!place)
{
    return console.log("Please provide an address")
}

geocode(place, (err, {lat, lon}={})=>{

    // console.log(res)
    
    if(err)
    {
        console.log('Error : ', err)
    }
    else
    {
        forecast(lat, lon, (err, data)=>{
            if(err)
            {
                console.log('Error : ', err)
            }
            else
            {
                console.log(data)
            }
        })
    }
})

