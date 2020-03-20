// javascript that the client will download and run
// this will not be processed by node

// The same name that I putted on ng-app directive
// its similar to module.exports
// The array is a list of modules that this module depends on
angular
    .module('TestApp',[]);

function ctrlFunc(){
    // 'this' points to the object that controller has, where I called vm (view model) in my index (from ejs)
    this.message = 'Hello';
}

angular
    .module('TestApp')
    .controller('MainController', ctrlFunc);
    // This add the controller to this module, this app
    // is the name specified on using the directive ng-controlller

