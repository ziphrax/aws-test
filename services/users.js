var Datastore = require('nedb')
var userDS =  new Datastore({ filename:'data/users.db' , autoload : true });

module.exports = {
    count : function(args,cb){
        userDS.count(args.query,cb);
    },
    insert : function(args,cb){
        userDS.insert(args.doc, cb );
    },
    find : function(args,cb){
        userDS.find(args.query,cb);
    },
    update : function(args,cb){
        userDS.update(args.query,args.update,args.options,cb);
    },
    remove: function(args,cb){
        userDS.remvove(args.query,args.options,cb);
    }
}
