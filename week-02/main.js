// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';

let stack = new Stack();
stack.print();

stack.push(5);
stack.push(8);
stack.print();

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？
//

console.log("size:", stack.size());

console.log(stack.pop());
console.log("top value:", stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log("size:", stack.size());

stack.push(11);
stack.push(14);
stack.print();
console.log("size:", stack.size());
stack.clear();
console.log("size:", stack.size());
stack.push(17);
stack.push(20);
stack.print();
