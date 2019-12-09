const geocode = require/'.utils/geocode')
const geocode = require/'.utils/forecast')

const address = process.argv[2]
  console.log('Please add your addres')

} else {
  geocode(address, {error, { latitude, longitude, location}) =>{
    if (error) {
      return console.log(error)
    }

    forecast(latitude, longitude, (error, forecastData) =>{
      if (error) {
        return console.log(error)
      }

      console.log(location)
      console.log(forecastData)
      
      })
    })
  }
