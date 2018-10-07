function sayHello (name) {
    console.log('Hello ' +name);
    }
    sayHello('Kritika');
    sayHello('From first function');

function func1()
{
console.log('Inside Function Statement');
}
func1();
var funcexp = function() {
    console.log('Using Function Experssion');
    }
    funcexp();
var greet = require('./greet');
greet();

function fclass()
{
console.log('First class function calling');
}
fclass();

function logfunctionclass(fn)
{
fn();
}
logfunctionclass(fclass);