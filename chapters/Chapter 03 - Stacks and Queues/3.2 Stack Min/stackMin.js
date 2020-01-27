class StackMin {
  items = [];
  minStack = [];

  min() {
    const minIndex = this.minStack.length ? this.minStack.length - 1 : 0;
    return this.minStack[minIndex];
  }

  push(item) {
    const minIndex = this.minStack.length ? this.minStack.length - 1 : 0;

    if (!this.minStack.length || this.minStack[minIndex] >= item) {
      this.minStack.push(item);
    }

    return this.items.push(item);
  }

  pop() {
    const minIndex = this.minStack.length ? this.minStack.length - 1 : 0;
    const itemIndex = this.items.length ? this.items.length - 1 : 0;

    if (this.minStack[minIndex] === this.items[itemIndex]) {
      this.minStack.pop();
    }


    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

module.exports = StackMin;