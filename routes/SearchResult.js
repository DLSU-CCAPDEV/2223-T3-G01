const express = require('express');
const auth = require('../middleware/auth');
const app = express();

const { Profile } = require('../models/Profile');
app.get('/', async(req, res) => {
    var profile = await Profile.findOne({username:req.session.username});
    if (req.session.username){
        // Render the SearchResult.hbs template and pass both search results to it
        res.render('SearchResult', { user:req.session.username,
          profile:profile});
        }else{
          res.render('SearchResult');
        }
  });



module.exports = app;


