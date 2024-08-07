var MyQueue = function () {
  this.stack = [];
  this.secondStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  let curr = null;
  while ((curr = this.stack.pop())) {
    this.secondStack.push(curr);
  }
  this.secondStack.push(x);

  while ((curr = this.secondStack.pop())) {
    this.stack.push(curr);
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.stack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
