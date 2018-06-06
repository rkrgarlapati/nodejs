
const yargs = require('yargs');
const axios = require('axios');

var args = yargs.options({
    a:{
        alias:'address',
        demand:true,
        description:'address to search',
        string:true,
        default:'Hyderabad'
    }
}).argv;

var encodedAdd = encodeURIComponent(args.address);
var geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdd}&key=AIzaSyDJyfRfJT7NrV9xiPyEjRsAIplr2EcJ06M`

axios.get(geoUrl).then((result) => {
    if(result.data.status === 'ZERO_RESULTS'){
        throw new Error('No data found for this address.');
    } else {
        console.log('Address :',result.data.results[0].formatted_address)
        var lat = result.data.results[0].geometry.location.lat
        var lng = result.data.results[0].geometry.location.lng

        var weather = `https://api.darksky.net/forecast/595c5ec1ffd42716900f9efedd9a9780/${lat},${lng}`;

        return axios.get(weather);
    } 
}).then((result)=>{
    console.log('Current Temperature ',result.data.currently.temperature);
}).catch((err) => {
    console.log(err.message);
});
