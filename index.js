const greet = function(name) {
    return `Hello, ${name}!`;
  };
  
  const result = greet("Hadil");
  console.log(result);
//Functions Using Arrow Syntax
const add = (a, b) => a + b;


console.log(result);
//map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
//Callback Functions
setTimeout(() => {
    console.log("This runs after a timeout.");
  }, 1000);

  //this value 
  const obj = {
    value: 42,
    getValue: function() {
      return () => this.value;
    },
  };
  const getValue = obj.getValue();
  console.log(getValue()); 
  