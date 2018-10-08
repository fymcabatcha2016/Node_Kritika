var Emitter = require('./emitter');
var emtr=new Emitter();
emtr.on('greet', function(){
    console.log('Hey From on emitter');
});

emtr.on('greet', function(){console.log('Hello');
});
console.log("hello");
emtr.emit('greet');

var greet1 =
require('./Emitter');
greet1();