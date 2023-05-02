// https://leetcode.com/problems/fruit-into-baskets/

function totalFruit(fruits) {
    const myMap = new Map();
    let counter = 0;
    let maxCounter = 0;
    let left = 0;
    for (let i = 0; i < fruits.length; i++) {
        if (myMap.has(fruits[i])) {
            let treeCount = myMap.get(fruits[i]);
            myMap.set(fruits[i], ++treeCount);
            counter++;
        } else {
            myMap.set(fruits[i], 1);
            counter++;
        }
        while (myMap.size > 2) {
            counter--;
            if (counter > maxCounter) {
                maxCounter = counter;
            }
            let tmp = myMap.get(fruits[left]);
            myMap.set(fruits[left], --tmp);
            if (myMap.get(fruits[left]) === 0) {
                myMap.delete(fruits[left]);
            }
            left++;
        }
    }
    return counter > maxCounter ? counter : maxCounter;
}

module.exports = totalFruit;