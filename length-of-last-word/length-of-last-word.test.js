const checkLength = require('./length-of-last-word');

describe('length-of-last-word', () => {
    it.each([
        ["Hello World",5],
        ["   fly me   to   the moon  ",4],
        ["luffy is still joyboy",6]
    ])('Return the length of the last word in the string.Length of %s is %i',(word,wordLength) =>{
        expect(checkLength(word)).toBe(wordLength);
    })
});