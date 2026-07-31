class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  pop() {
    if (!this.head || this.length == 1) {
      return;
    }
    let prev = this.head;
    let temp = prev.next;

    while (temp.next != null) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  show() {
    let curr = this.head;
    console.log("\nInicia\n");
    while (curr != null) {
      console.log(curr.value);
      curr = curr.next;
    }
    console.log("\nTermina\n");
  }

  unshift(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    if (this.length === 1) {
      this.tail = newNode;
    }
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) return false;
    let temp = this.get(index);
    temp.value = value;
    return true;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);

    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;

    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }

  findMiddleNode() {
    if (!this.head) return undefined;
    if (!this.head.next) return this.head;

    let fast = this.head;
    let slow = this.head;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  hasLoop() {
    let slow = this.head;
    let fast = this.head;

    while (fast != null && fast.null != null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) return true;
    }
    return false;
  }

  findKthFromEnd(k) {
    if (!this.head || k <= 0) return null;
    let fast = this.head;
    let slow = this.head;

    for (let i = 0; i < k - 1; i++) {
      if (!fast.next) return null;
      fast = fast.next;
    }

    while (fast.next != null) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow;
  }

  removeDuplicates() {
    if (!this.head) return null;
    let current = this.head;
    let runner = null;

    while (current != null) {
      runner = current;
      while (runner.next != null) {
        if (runner.next.value === current.value) {
          if (this.tail === runner.next) {
            this.tail = runner;
          }
          runner.next = runner.next.next;
          this.length--;
        } else {
          runner = runner.next;
        }
      }
      current = current.next;
    }
  }

  binaryToDecimal() {
    let curr = this.head;
    let sum = 0;
    while(curr != null) {
      sum *= 2;
      sum += curr.value
      curr = curr.next;
    }
    return sum
  }

  partitionList(x) {

    if (!this.head) return

    let dummy1 = new Node(0)
    let dummy2 = new Node(0)

    let temp1 = dummy1
    let temp2 = dummy2

    let curr = this.head;

    while(curr !== null) {
      if (curr.value < x) {
        temp1.next = curr
        temp1 = temp1.next
      } else {
        temp2.next = curr
        temp2 = temp2.next
      }
      curr = curr.next
    }

    this.head = dummy1.next
    temp1.next = dummy2.next
    temp2.next = null

  }

}

let myLinkedList = new LinkedList(4);
myLinkedList.push(3)
myLinkedList.push(2)
myLinkedList.push(1)
myLinkedList.push(90)

//myLinkedList.show();

//console.log("Mi index 10: ", myLinkedList.get(10));
//console.log("Mi index 2: ", myLinkedList.get(2));
//myLinkedList.show();
//myLinkedList.reverse().show();
//myLinkedList.push(1);
//myLinkedList.show();

myLinkedList.show();

myLinkedList.partitionList(3)

myLinkedList.show()


