const { expect, test, describe } = require('@jest/globals');
const { add, subtract, divide, multiply, sayHello } = require('./functions');

// test('Hello World', function() {
// expect(1).toBe(1)
// })

// test('add function should add two numbers', function() {
//     expect(add(2, 5)).toBe(7);
// });

// test('subtract function should return a number', function() {
//     expect(subtract(4, 1)).not.toBeNaN();
// })

// test('reference types are special', function() {
//     expect([1, 2]).toEqual([1, 2])
// });

// describe('Math operations', function() {
//     test('add function should add two numbers', function() {
//         expect(add(2, 5)).toBe(7);
//     });

//     test('subtract function should return a number', function() {
//         expect(subtract(4, 1)).not.toBeNaN();
//     })
// })

// describe('sayHello function should do the things', function() {
//     test('should return string of hello', function() {
//         expect(sayHello()).toBe('hello')
//     })

//     test('should not return string of goodbye', function() {
//         expect(sayHello()).not.toBe('goodbye')
//     })

//     test('should not return falsy value', function() {
//         expect(sayHello()).toBeTruthy();
//     })
// })

const myArr = ['joe', 'mary', 'ralph', 'sue'];

// test('myArr should contain mary', function() {
//     expect(myArr).toContain('mary')
// })

// test('myArr should not contain sam', function() {
//     expect(myArr).not.toContain('sam');
// })

// JADE
test('divide function should return a number lower than 10', () => {
    expect(divide(10, 2)).toBeLessThan(10)
})

// ARASH
test('anything', function () {
    expect.anything()
})

// EVAN
test('divide function should return numbers greater than 0', function () {
    expect(divide(12, 2)).toBeGreaterThan(0);
})

// DUSTY
describe('multiply and divide aint bad with tests', function () {
    test('multiply should multiply two numbers', function () {
        expect(multiply(4, 2)).toBe(8);
    });
    test('divide should be greater than 2', function () {
        expect(divide(50, 4)).toBeGreaterThan(2);
    })

});

//SABRINA
test('myArr should not be longer than 4', () => {
    expect(myArr).toHaveLength(4);
})

// AIDEN
test("MATH", function() {
    expect(add(multiply(2, divide(8, 2)), 2)).toBe(10);
})
