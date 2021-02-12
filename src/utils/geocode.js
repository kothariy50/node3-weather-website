const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoieWFzaDIwMTExOSIsImEiOiJja2t6YjM3cjIwaG1oMnNxbzExd2J2amZrIn0.2CnmTCnAbjapeLBTkea4wA&limit=1'

    request({url, json: true}, (error,{body} = {}) => {
        if(error){
            callback('unable to connect to location!', undefined)
        }else if(body.features.length === 0){
            callback('Unable to find location. try something else.',undefined)    
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode