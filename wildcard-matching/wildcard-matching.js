// https://leetcode.com/problems/wildcard-matching/description/

function isMatch(s, p) {
    if (p === "*") {
        return true;
    } else if (s === p) {
        return true;
    } else if (p.includes("?")) {
        let id = p.indexOf("?");
        if (id === 0) {
            let newS = s.slice(1, s.length);
            let newP = p.slice(1, p.length);
            if (newS === newP) {
                return true;
            }
        } else {
            let newS = s.slice(0, id);
            newS += s.slice(id + 1, s.length);
            let newP = p.slice(0, id);
            newP += p.slice(id + 1, p.length);
            if (newS === newP) {
                return true;
            }
        }

    }
    return false;

}

isMatch("bcaaa", "bl?aa");