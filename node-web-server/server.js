const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req,res,next) => {

    var now = new Date().toString();
    var log = `${now}: ${req.method} : ${req.url}`;

    console.log(log);
    next();
});

pp.use((req,res,next) => {
    res.render('sitedown');
}); 

hbs.registerHelper('getcurrentyear',() => {
    return new Date().getFullYear();
})
hbs.registerHelper('getcurrentDate',() => {
    return new Date();
})

hbs.registerHelper('toUpper',(text) => {
    return text.toUpperCase();
})

app.get('/bad',(req,res) => {
    res.send({
        errorMsg:'Unable to find data you requested.'
    });
});

app.get('/',(req,res) => {
    res.render('welcome.hbs');
});

app.get('/about',(req,res) => {
    res.render('about.hbs',{
        aboutme:'Ravi Kumar'
    });
})

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});