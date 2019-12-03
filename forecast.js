const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/46343150912d41d9ceb356ee47d7060a/' + latitude + ',' + longitude
  request({ url, json: true}, (error, {body}) =>{
    if(error) {
      callback('Not able to connect to the weather service', undefined)
    } else if (body.error){
      callback('Not able to find the location', undefined)
    } else  {
      callback(undefined, body.dailt.data[0].summary + 'It is currently' + body.currently.temperature + 'degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')

    }
  })
}

module.exports = forecast
