// 57: Default parameters - basics
// To do: make all tests pass, leave the assert lines unchanged!

let assert = require('chai').assert;

describe('default parameters make function parameters more flexible', () => {

  it('define it using an assignment to the parameter `function(param=1){}`', function() {
    var number = (param=0) => param;
    
    assert.equal(number(), 0);
  });

  it('it is used when undefined is passed', function() {
    let number = (int = 23) => int;
    const param = 42;
    
    assert.equal(number(), 23);
  });

  it('it is not used when a value is given', function() {
    function xhr(method = 'GET') {
      return method;  
    }
    
    assert.equal(xhr('POST'), 'POST');
  });

  it('it is evaluated at run time', function() {
    let defaultValue = 42;

    function xhr(method = `value: ${defaultValue}`) {
      return method;  
    }
    
    assert.equal(xhr(), 'value: 42');

    defaultValue = 23;

    assert.equal(xhr(), 'value: 23');
  });

  it('it can also be a function', function() {
    let defaultValue = () => 1;
    function fn(value = defaultValue()) {
      return value;  
    }
    
    assert.equal(fn(), defaultValue());
  });
  
});