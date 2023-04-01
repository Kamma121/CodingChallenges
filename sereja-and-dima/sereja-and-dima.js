// https://codeforces.com/contest/381/problem/A

function calculateSum(n, cards) {
    if (n < 1 || n > 100) {
        return "Wrong amount of cards on the table";
    }
    let moveCount = 0;
    let serejaSum = 0;
    let dimaSum = 0;
    while (moveCount < n) {
        switch (moveCount % 2) {
            case 0 :
                if (cards[0] >= cards[cards.length - 1]) {
                    serejaSum += cards[0];
                    cards.splice(0, 1);
                } else {
                    serejaSum += cards[cards.length - 1];
                    cards.splice(cards.length - 1, 1);
                }
                moveCount++;
                break;
            case 1 :
                if (cards[0] >= cards[cards.length - 1]) {
                    dimaSum += cards[0];
                    cards.splice(0, 1);
                } else {
                    dimaSum += cards[cards.length - 1];
                    cards.splice(cards.length - 1, 1);
                }
                moveCount++;
                break;
            default :
                break;
        }

    }
    return `${serejaSum} ${dimaSum}`;
}

const cards = [1, 2, 3, 4, 5, 6, 7];
calculateSum(7, cards);