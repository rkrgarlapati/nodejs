
const yargs = require('yargs');
const request = require('request');

const geocode = require('./geocode/geocode');
const temp = require('./temperature/temperature');

var args = yargs.options({
    a:{
        alias:'address',
        demand:true,
        description:'address to search',
        string:true
    }
}).argv;

geocode.geocodeaddress(args.a, (errorMsg, results) => {
    if(errorMsg){
        console.log('Error :', errorMsg);
    } else {
        console.log(JSON.stringify(results, undefined,2));
        temp.temperature(results.latitude, results.longitue, (error,weatherResult) => {
            console.log(JSON.stringify(weatherResult,undefined,2));
        });
    }
});

