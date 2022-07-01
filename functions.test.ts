const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('return an array', () => {
        expect(shuffleArray).toBeTruthy()
    });

    test('return a copy of the array that is the same length as the original', () => {
        expect(shuffleArray.arrCopy).toBe(shuffleArray.array)
    });
})