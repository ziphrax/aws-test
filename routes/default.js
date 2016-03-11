var express = require('express')
    ,Router = express.Router();

Router.route('/')
    .get(function(req,res){
        res.send('Hello');
    });

module.exports = Router;
