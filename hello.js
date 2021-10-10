const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();

const sayHelloo  = function (name) {
  console.log("Hello, " + name);
}
sayHelloo("Caliban");

const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);
