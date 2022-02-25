const {shuffleArray} = require('./utils')

// console.log(typeof shuffleArray)

describe('shuffleArray should', () => {
    // test('return an array', () => {
    //     let shuffledArr = shuffleArray([1, 2, 3, 4, 5])
    //     expect(typeof shuffledArr).toBe("array")
    // })
    test('scatter numbers', () => {
        let arr = [1,2,3,4,5]
        expect(arr).not.toBe(shuffleArray([1,2,3,4,5]))
        // console.log(arr)
        // console.log(shuffleArray([1,2,3,4,5]))
    })
    test('stay the same length', () => {
        let arr = [1,2,3,4,5]
        let shuffledArr = shuffleArray(arr)
        expect(shuffledArr.length).toEqual(arr.length)
    })
})