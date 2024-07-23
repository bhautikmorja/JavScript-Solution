var createHelloWorld = function () {
  return function () {
    return "Hello World";
  };
};

let helloWorldFunction = createHelloWorld();
console.log(helloWorldFunction());
