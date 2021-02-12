const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/forecast/' + latitude + ',' + longitude + '?id=524901&appid=b85fa21550b6d8d2fd8a43acb198c172'

    request({url, json: true}, (error,{body}) => {
        if(error){
            callback('unable to connect',undefined)
        }
        // else if(response.body.error){
        //     callback('unable to find', undefined)
        // }
        else{
            callback(body.cnt)
        }
    })
}

module.exports = forecast