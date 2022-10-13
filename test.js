function ListNode(val) {
  this.val = val;
  this.next = null;
}

const reverseKGroup = (head, k) => {
    
    if (k === 1 || !head || !head.next) {
      return head;
    }

    // defined pointer, a count variable, and a dummy node to attach first reversed linked list section to
    let count;
    let result = new ListNode(-1);
    let res = result;

    // iterate through linked list
    while (head) {

	// define additional pointers
      let fakeHead = head;
      let next = null;
      count = 1;

      // count k elements in linked list
      while (head && count !== k) {
        count += 1;
        head = head.next;
      }

      // if there were k elements left in the linked list reverse
      if (head && count === k) {
        next = head.next;
        head.next = null;
        result.next = reverseList(fakeHead);

	 // move pointer to end of newly reversed linked list
        while (result.next) {
          result = result.next;
        }

	 // move pointer to start of next linked list section
        head = next;
	
	 // if there weren’t k elements left in the linked list move pointer to end of list
      } else if (!head) {
        while (result.next) {
          result = result.next;
        }
        result.next = fakeHead;
      }
    }

  // return linked list
  return res.next;
};


const reverseList = head => {
  let result = null;
  let stack = [];
  
  let current = head;
  while (current) {
    stack.push(current);
    current = current.next;
  }
  
  result = stack.pop() || [];
  current = result;
  
  while (current) {
    current.next = stack.pop();
    current = current.next;
  }

  return result;
};



// a recursive option to reverse the linked list
const reverseListRecursive = (node, parent) => {
  let result = parent || {};
  
  if (node) {
    let child = node.next;
    node.next = parent;

    result = reverseListRecursive(child, node);
  }

  return result;
}
