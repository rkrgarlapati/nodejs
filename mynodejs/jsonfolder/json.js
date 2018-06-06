const fs = require('fs');

var jsonObj = {
    title:'some title',
    body:'some body'
};

var jsonString = JSON.stringify(jsonObj);
console.log(jsonString);

fs.writeFileSync('jsonfile.json',jsonString);

var jsonObjBack = fs.readFileSync('jsonfile.json');
var jsonObjParse = JSON.parse(jsonObjBack);

console.log(jsonObjParse);
console.log(typeof jsonObjParse)
console.log(jsonObjParse.title);