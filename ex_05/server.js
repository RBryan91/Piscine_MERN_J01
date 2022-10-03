const express = require('express');
const app = express();
const port = process.env.PORT || 4242;
const fs = require('fs');
const path = require('path');
app . set ( 'view engine' , 'ejs' );

app.get('/name/:name', (req, res) =>
{
    let name = req.params.name;
    let age = req.query.age;

    res.render("nameage", {name: name, age: age})
});
app.get('/name/', (req,res)=>
{
    res.render('unknow');
})
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});