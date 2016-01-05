// 7: block scope - let
// To do: make all tests pass, leave the asserts unchanged!

let assert = require('chai').assert;

describe('`let` restricts the scope of the variable to the current block', () => {

  describe('`let` vs. `var`', () => {

    it('`var` works as usual', () => {
      if (true) {
        var varX = true;
      }
      assert.equal(varX, true);
    });
    
    it('`let` restricts scope to inside the block', () => {
      if (true) {
        let letX = true;
      }
      assert.throws(() => console.log(letX));
    });
    
  });

  describe('`let` usage', () => {
    
    it('`let` use in `for` loops', () => {
      let obj = {x: 1};
      for (let key in obj) {
        assert.equal(key,'x'); // Added by myself - key variable only exists inside this block
      }

      assert.deepEqual(obj,{x:1}); // Added by myself - obj variable still exists inside this it(){} block
      assert.throws(() => console.log(key));

      // Added by myself - opposite test to show that varKey still exists outside curly block when using var
      for (var varKey in obj) {}
      assert.equal(varKey,'x');
    });
    
    it('create artifical scope, using curly braces', () => {
      {
        let letX = true;
      }
      assert.throws(() => console.log(letX));
    });
    
  });
  
});
