var express = require('express')
    ,app = express()
    ,port = 3000
    ,bodyParser = require('body-parser')
    ,defaultRoute = require('./routes/default')
    ,usersRoute = require('./routes/users');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/',express.static('client'));
app.use('/api/',defaultRoute);
app.use('/api/users',usersRoute);


app.listen(port,function(){
    console.log('app listening on port %s',port);
});
