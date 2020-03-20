// get the configs for the app in a json file
var configValues = require('./config');

module.exports = {

    "getDbConnectionString" : function(){
        return 'mongodb+srv://'+configValues.uname+':'+configValues.pwd+'@jekalearning-9ahk8.mongodb.net/jeka_database?retryWrites=true&w=majority';
    }

}