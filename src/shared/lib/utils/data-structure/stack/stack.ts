import { LinkedList, ToStringCallback } from "../linked-list/linked-list";

export default class Stack<TValue> {
  linkedList = new LinkedList<TValue>();

  isEmpty() {
    return !this.linkedList.head;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList.head?.value;
  }

  push(value: TValue) {
    this.linkedList.prepend(value);
  }

  pop() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  toArray() {
    return this.linkedList
      .toArray()
      .map((linkedListNode) => linkedListNode.value);
  }

  toString(callback: ToStringCallback<TValue>) {
    return this.linkedList.toString(callback);
  }
}
