const request = require('request');

var temperature = (latitude, longitude, callback) => {
    request(
        {
            uri:`https://api.darksky.net/forecast/595c5ec1ffd42716900f9efedd9a9780/${latitude},${longitude}`,
            json:true
        },
        (error,response,body) => {
            
            callback(undefined,{temp:body.currently.temperature});
        }
    )
}

module.exports = {
    temperature
}