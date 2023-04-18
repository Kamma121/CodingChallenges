// https://leetcode.com/problems/middle-of-the-linked-list/description/

function middleNode(head) {
    let tmpNode = head;
    let counter = 0;
    while (tmpNode) {
        tmpNode = tmpNode.next;
        counter++;
    }
    const middle = Math.floor(counter / 2);
    for (let i = 0; i < middle; i++) {
        head = head.next;
    }
    return head;
}