const { succeed, fail, repair, get  } = require('./enhancer.js');
// test away!

describe('enhancing game items', () => {
    let item = (num, num2) => {return {
        name: 'KungFu Ninja Expert',
        durability: num,
        enhancement: num2
    }};
    
    // accepts an item object and returns a new item with the durability restored to 100
    describe('repair durability', () => {
        it('should restore durability to 100', () => {
            const repairedItem = repair(item)
            expect(repairedItem.durability).toBe(100)
        })
    })
    // accepts an item object and returns a new item object modified according to the 
    //rules defined by the client for enhancement success
    describe('succussful enhancements', () => {
        it('should increase enhancement by 1', () => {
            const enhancedItem = succeed(item(13, 10))
            expect(enhancedItem.enhancement).toBe(11)
        })
        it('enhancment should stay at 20', () => {
            const enhancedItem = succeed(item(13, 20))
            expect(enhancedItem.enhancement).toBe(20)
        })
    })
    // accepts an item object and returns a new item object modified according to the rules 
    //defined by the client for enhancement failure.
    describe('failed enhancements', () => {
        it('should decrease durability by 5', () => {
            const failedItem = fail(item(25, 14))
            expect(failedItem.durability).toBe(20)
        })
        it('should decrease durability by 10 and decrease enchancement by 1', () => {
            const failedItem = fail(item(27 , 17))
            expect(failedItem.durability).toBe(17)
            expect(failedItem.enhancement).toBe(16)
        })
    })
})
