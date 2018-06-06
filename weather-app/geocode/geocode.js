const request = require('request');

var geocodeaddress = (address, callback) => {

    var encodedAdd = encodeURIComponent(address);

    request(
        {
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdd}&key=AIzaSyDJyfRfJT7NrV9xiPyEjRsAIplr2EcJ06M`,
            json:true
        },
        (error, response, body) => {
            if(error){
                callback('error with connection...');
            } else if(body.status === 'OK'){
                callback(undefined,  {
                    address:body.results[0].formatted_address,
                    latitude:body.results[0].geometry.location.lat,
                    longitue:body.results[0].geometry.location.lng
                })                
            } else if(body.status === 'ZERO_RESULTS'){
                callback('Data not found for the address');
            } 
        }
    )
};

module.exports = {
    geocodeaddress
};