class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeTwoLists(list1, list2) {
  if (list1 === null) {
    return list2
  }
  if (list2 === null) {
    return list1
  }

  const dummy = new ListNode()
  let current = dummy

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }

    current = current.next
  }

  // Append the remaining nodes of the non-empty list
  if (list1 !== null) {
    current.next = list1
  } else if (list2 !== null) {
    current.next = list2
  }

  return dummy.next
}
