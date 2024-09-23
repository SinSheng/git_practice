// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
// => package.json
export default class Stack {
    // TODO: # 有特別的意思嗎？請以註解回覆。
    // #在一個class中代表私有(private)的屬性或方法，其目的是為了達成保護資料不被任意修改或使用，讓其只能在class裡面被呼叫，也就是物件導向中的封裝(Encapsulation)
    #items;

    constructor() {
        this.#items = [];
    }

    // 在 stack 頂部加入元素i
    push(element) {
        this.#items.push(element);
    }

    // 移除並回傳 stack 頂部的元素
    pop() {
        if(this.isEmpty()){
            return "error! stack is empty";
        }
        return this.#items.pop();
    }

    // 回傳 stack 頂部的元素，但不移除它
    peek() {
        return this.#items[this.#items.length-1];
    }

    // 檢查 stack 是否為空
    isEmpty() {
        return this.#items.length == 0;
    }

    // 回傳 stack 中元素的個數
    size() {
        return this.#items.length;
    }

    // 清空 stack 
    clear() {
        this.#items = [];
    }

    // 印出 stack 內容
    print() {
        console.log(this.#items);
    }
}
