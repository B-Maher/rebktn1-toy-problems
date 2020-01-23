/*
  Write a function that reverses a linked list.
  ​
  Explanation:
  ​
  Given the below linked list:
  ​
    A -> B -> C -> D -> E -> null
  ​
  Return:
  ​
    E -> D -> C -> B -> A -> null
  ​
  Constraint 1: Do this in linear time
  Constraint 2: Do this in constant space
  Constraint 3: Do not mutate the original nodes by adding any new properties
  */

// Helpers

function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}
var reverseLinkedList = function(linkedList) {
  let newLinkedList = {};
  while (!!linkedList) {
    if (!newLinkedList.value) {
      let tail = new Node(linkedList.value);
      newLinkedList = tail;
    } else {
      let node = new Node(linkedList.value);
      node.next = newLinkedList;
      newLinkedList = node;
    }
    linkedList = linkedList.next;
  }
  return newLinkedList;

  // newLinkedList = newLinkedList || {};
  // if (!linkedList.next) {
  //   let node = new Node(linkedList.value);
  //   return node;
  // } else {

  //   let newLinkedList = reverseLinkedList(linkedList.next);
  //   let node = new Node(linkedList.value);
  //   newLinkedList.next = node;
  // }
  // return newLinkedList;
};
