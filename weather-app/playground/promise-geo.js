const request = require('request');

var promisegeo = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAdd = encodeURIComponent(address);

    request(
        {
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdd}&key=AIzaSyDJyfRfJT7NrV9xiPyEjRsAIplr2EcJ06M`,
            json:true
        },
        (error, response, body) => {
            if(error){
                reject('error with connection...');
            } else if(body.status === 'OK'){
                resolve({
                    address:body.results[0].formatted_address,
                    latitude:body.results[0].geometry.location.lat,
                    longitue:body.results[0].geometry.location.lng
                })                
            } else if(body.status === 'ZERO_RESULTS'){
                reject('Data not found for the address');
            } 
        }
    )
    });
};

promisegeo('00f0').then((message) => {
    console.log(message);
}).catch((errormsg) => {
    console.log(errormsg);
});