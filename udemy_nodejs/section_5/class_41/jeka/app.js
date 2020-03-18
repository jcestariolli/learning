var Greetr = require('./greetr');

var greetr1 = new Greetr();
greetr1.on('greet', function(data) {
    console.log('Someone greeted!');
});
greetr1.greet('Tony');