// https://leetcode.com/problems/reverse-linked-list-ii/description/

function reverse(head, left, right) {
    if (head.length < 1 || head.length > 500) {
        return "Wrong number of nodes";
    }
    if (left < 1 || left > right || right > head.length) {
        return "Wrong left or right value";
    }
    if (head.length === 1) {
        return head;
    }
    let leftId = head.indexOf(left);
    let rightId = head.indexOf(right);
    let newHead = head.slice(0, left - 1);
    while (rightId >= leftId) {
        newHead.splice(newHead.length, 0, head[rightId]);
        rightId--;
    }
    rightId = head.indexOf(right);
    let lastRight = head.slice(rightId + 1, head.length);
    for (let element of lastRight) {
        newHead.splice(newHead.length, 0, element);
    }
    return newHead;
}

reverse([1, 2, 3, 4, 5], 2, 4);

