var express = require('express')
    ,Router = express.Router()
    ,userService = require('../services/users');


Router.route('/')
    .get(function(req,res){
        userService.find({},function(err,docs){
            if(err){
                res.status(500).json({ 'err' : err });
            } else { res.json( docs );}
        })
    })
    .post(function(req,res){
        userService.insert({ doc : req.body} ,function(err,doc){
            if(err){
                console.log(err);
                res.status(500).json({ 'err' : err });
            } else { res.json( doc );}
        });
    });


module.exports = Router;
