const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("should return an array", () => {
        const shuffleArr = shuffleArray([1, 2, 3, 4, 5]);
        expect(shuffleArr).toHaveLength(5);
      });
    test("shuffleArray length", () => {
        const arrLength = [5, 4, 3, 2, 1];
        expect(shuffleArray([1, 2, 3, 4, 5])).toEqual(
        expect.arrayContaining(arrLength)
        );
      });
})