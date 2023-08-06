const express = require('express');
const app = express();
const { Profile } = require('../models/Profile')

app.get('/AboutPage', async(req, res) => {

    var profile = await Profile.findOne({username:req.session.username})
  
    if (req.session.username) {
        res.render('AboutPage', { user:req.session.username,
            profile:profile,
             });
    } 
    else {
        res.render('AboutPage');
    }
  });


  
module.exports = app;