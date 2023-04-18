// https://leetcode.com/problems/linked-list-cycle-ii/description/

function detectCycle(head) {
    let slow = head;
    let fast = head
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            while (head !== slow) {
                head = head.next;
                slow = slow.next;
            }
            return slow;
        }
    }
    return null;
}