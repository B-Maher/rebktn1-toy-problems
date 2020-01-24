/*
 *
 * Linked List Intersection
 *
 * Write a function linkedListIntersection that returns the node
 * at which the intersection of two linked lists begins,
 * or null if there is no such intersection.
 *
 * Example:
 *
 * Given the following two linked lists list1 and list2,
 * linkedListIntersection(list1,list2) should return D
 * as the node of intersection.
 *
 *    A → B → C
 *             ↘
 *               D → E → F
 *             ↗
 *        X → Y
 *
 * Given the following two linked lists list1 and list2,
 * linkedListIntersection(list1,list2) should return NULL
 * as there is no point of intersection.
 *
 *    A → B → C → D
 *    X → Y → Z
 *
 */

// Helper function (do not edit)
function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

function linkedListIntersection(list1, list2) {
  // TODO: Implement this function!
  let array1 = [];
  let array2 = [];
  let result = null;
  while (list1 || list2) {
    if (list1) {
      array1.push(list1.value);
      list1 = list1.next;
    }
    if (list2) {
      array2.push(list2.value);
      list2 = list2.next;
    }
  }
  if (array2.length > array1.length) [array1, array2] = [array2, array1];
  for (let i = 0; i < array1.length; i++) {
    let str1 = array1.slice(i).join("");
    let str2 = array2.join("");
    if (str2.includes(str1)) return array1[i];
  }
  return null;
}
