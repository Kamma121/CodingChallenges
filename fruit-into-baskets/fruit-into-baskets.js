// https://leetcode.com/problems/fruit-into-baskets/

function totalFruit(fruits) {
    const treeMap = new Map();
    let counter = 0;
    let maxCounter = 0;
    let left = 0;
    for (let i = 0; i < fruits.length; i++) {
        if (treeMap.has(fruits[i])) {
            let treeCount = treeMap.get(fruits[i]);
            treeMap.set(fruits[i], ++treeCount);
            counter++;
        } else {
            treeMap.set(fruits[i], 1);
            counter++;
        }
        while (treeMap.size > 2) {
            counter--;
            if (counter > maxCounter) {
                maxCounter = counter;
            }
            let treeCount = treeMap.get(fruits[left]);
            treeMap.set(fruits[left], --treeCount);
            if (treeMap.get(fruits[left]) === 0) {
                treeMap.delete(fruits[left]);
            }
            left++;
        }
    }
    return counter > maxCounter ? counter : maxCounter;
}

module.exports = totalFruit;