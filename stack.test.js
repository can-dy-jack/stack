const {expect} = require('chai');
const {Stack} = require('./index.js');

describe('Stack Tests', () => {
    const stack = new Stack();

    describe('constructor test', () => {
        it('creates a new stack.', () => {
            expect(stack).to.be.instanceOf(Stack);
        });

        it('creates a new stack with an array.', () => {
            const stack2 = new Stack([1, 2, 3]);
            expect(stack2).to.be.instanceOf(Stack);
            expect(stack2.size()).to.equal(3);
        });
    });

    describe('isEmpty() test', () => {
        it('Checks if the stack is empty.', () => {
            expect(stack.isEmpty()).to.equal(true);
        });

        it('Checks if the stack is not empty.', () => {
            stack.push(5);
            stack.push(3);
            expect(stack.isEmpty()).to.equal(false);
        });
    });

    describe('size() test', () => {
        it('return the number of elements in the stack.', () => {
            expect(stack.size()).to.equal(2);
        });
    });

    describe('peek() test', () => {
        it('return the top element in the stack.', () => {
            expect(stack.peek()).to.equal(3);
        });

        it('return the top element in the empty stack.', () => {
            stack.pop();
            stack.pop();
            expect(stack.peek()).to.equal(undefined);
        });
    });

    describe('push() test', () => {
        it('push an element to the top of the stack.', () => {
            stack.push(5);
            expect(stack.push(7)).to.be.instanceOf(Stack);
            expect(stack.peek()).to.equal(7);
            expect(stack.size()).to.equal(2);
        });
    });

    describe('pop() test', () => {
        it('remove and return the top element in the stack.', () => {
            expect(stack.pop()).to.equal(7);
            expect(stack.size()).to.equal(1);
        });

        it('remove and return the top element in the empty stack.', () => {
            stack.pop();
            expect(stack.pop()).to.equal(undefined);
            expect(stack.size()).to.equal(0);
        });
    });
});
