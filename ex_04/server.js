const express = require('express');
const app = express();
const port = process.env.PORT || 4242;
const fs = require('fs');
const path = require('path');
// 
//  app.get('/name', function(req, res) {
//    res.sendFile(path.join(__dirname, '/name.html'));
//  });
app . set ( 'view engine' , 'ejs' );

app.get('/name/:name', (req, res) => {
    var text =  req.params.name;
    res.render('name', {text: text})
  })
   
  
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});