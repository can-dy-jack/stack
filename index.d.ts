export class Stack<T> {
    constructor(arr?: T[]);
    isEmpty(): boolean;
    size(): number;
    peek(): T;
    push(item: T): Stack<T>;
    pop(): T;
}