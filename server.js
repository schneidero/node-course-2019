const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs'); 
app.use(express.static(__dirname+'/public'));

app.use((req,res,next) => {
    res.render('maintenance.hbs');
})

hbs.registerHelper('getCurrentYear',()=> {
    return new Date().getFullYear()
})

hbs.registerHelper('screamIt',(text)=> {
    return text.toUpperCase()
})

app.get('/',  (req, res) => {

    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: ' Welcome To My site'
    });
});

app.get('/about',  (req, res) => {

    res.render('about.hbs' , {
        pageTitle: 'About Page'
    });
});

app.get('/bad',  (req, res) => {

    res.send({
        errorMessage : 'Bad request could not compute'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});