// 9: object-literals - basics
// To do: make all tests pass, leave the assert lines unchanged!

let assert = require('chai').assert;

describe('The object literal allows for new shorthands', () => {

  const x = 1;
  const y = 2;
  const z = 3;

  describe('with variables', () => {
    it('the short version for `{x: x}` is {x}', () => {
      const short = {x};
      assert.deepEqual(short, {x: x});
    });
    it('works with multiple variables too', () => {
      const short = {x, y: z};
      assert.deepEqual(short, {x: x, y: z});
    });
  });
  
  describe('with methods', () => {
    
    const func = () => func;

    it('using the name only uses it as key', () => {
      const short = {it};
      assert.deepEqual(short, {it: it});
    });
    
    it('a different key must be given explicitly, just like before ES6', () => {
      const short = {otherKey: func};
      assert.deepEqual(short, {otherKey: func});
    });
    
    it('inline functions, can written as `obj={func(){}}` instead of `obj={func:function(){}}`', () => {
      const short = {inlineFunc(){
        return 'I am inline';
      }};
      assert.deepEqual(short.inlineFunc(), 'I am inline');
    });
  });
  
});
