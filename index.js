function receivesAFunction(callback) {
    callback(); // Call the passed function
  }
  
  // Example usage:
  receivesAFunction(() => console.log("Callback function executed!"));

  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I am a named function!");
    }
    return namedFunction;
  }
  
  // Example usage:
  const myFunction = returnsANamedFunction();
  myFunction(); // Logs: "I am a named function!"

  function returnsAnAnonymousFunction() {
    return function () {
      console.log("I am an anonymous function!");
    };
  }
  
  // Example usage:
  const myAnonFunction = returnsAnAnonymousFunction();
  myAnonFunction(); // Logs: "I am an anonymous function!"