/**
 * @copyright can-dy-jack 2023
 */

/**
 * @class Stack
 */
class Stack {
    constructor(arr) {
        if (Array.isArray(arr)) {
            this.data = arr.slice();
        } else {
            this.data = [];
        }
    }

    /**
     * @description Checks if the stack is empty.
     * @public
     * @returns {boolean}
     */
    isEmpty() {
        return this.data.length === 0;
    }

    /**
     * @description return the number of elements in the stack.
     * @public
     * @returns {number}
     */
    size() {
        return this.data.length;
    }

    /**
     * @description return the top element in the stack.
     * @public
     * @returns {number | undefined}
     */
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.data[this.data.length - 1];
    }

    /**
     * @description push an element to the top of the stack.
     * @public
     * @returns {Stack}
     */
    push(val) {
        this.data.push(val);
        return this;
    }

    /**
     * @description remove and return the top element in the stack.
     * @public
     * @returns {number | undefined}
     */
    pop() {
        if (this.isEmpty()) return undefined;
        return this.data.pop();
    }
}

exports.Stack = Stack;
