const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json7access_token=pk.eyJ1IjoibW9uaW1vbiIsImEiOiJjazJ3dGNoeGwwN2dpM2dsZXZnNnRweXp4In0.sgzY5p6C69SgeE3_PS8QFQ&limit=1'

  request({ url, json: true}, (error, {body}) =>{
    if(error) {
      callback('Not able to connect to the location service', undefined)
    } else if (body.features.length === 0){
      callback('Unable to find location. Try Again', undefined)
    } else  {
    callback(undefined, {
      latitude: body.features[0].center[1],
      longitude: body.features[0].center[0],
      location: body.features[0].place_name,
      })
    }
  })
}

module.exports = geocode
