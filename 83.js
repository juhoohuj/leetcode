
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {
    let dum = new ListNode(-Infinity)
    let prev = dum

    while(head) {
        if (head.val != prev.val) {
            prev.next = head
            head = head.next
        }

        if (head.val === prev.val) {
            head = head.next
        }
    }

    if (!head) prev.next = head;

    return dum.next
};


console.log(deleteDuplicates([1,2,2,3]))