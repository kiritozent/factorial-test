const findTrailingZero = require('./factorialCheck')
const moment = require('moment')
const { getRandomInt } = require('./util')

describe('findTrailingZero()', () => {
  it('find trailing zeroes small value', () => {
    expect(findTrailingZero(3)).toBe(0)
    expect(findTrailingZero(6)).toBe(1)
    expect(findTrailingZero(15)).toBe(3)
    expect(findTrailingZero(64)).toBe(14)
    expect(findTrailingZero(210)).toBe(51)
    expect(findTrailingZero(820)).toBe(203)
  })

  it('find trailing zeroes high value', () => {
    expect(findTrailingZero(23874)).toBe(5964)
    expect(findTrailingZero(325924)).toBe(81476)
    expect(findTrailingZero(5253234)).toBe(1313304)
    expect(findTrailingZero(9643275)).toBe(2410814)
    expect(findTrailingZero(7724390)).toBe(1931092)
    expect(findTrailingZero(1000000000)).toBe(249999998)
  })

  describe('run under 8 seconds', () => {
    const expectTrue = (min, max, done) => {
      try {
        const loopSequence = 10000
        const factorialSequence = []
        for (let i = 0; i < loopSequence; i++) {
          factorialSequence.push(getRandomInt(min, max))
        }
        const startTime = moment()

        for (let i = 0; i < loopSequence; i++) {
          findTrailingZero(factorialSequence[i])
        }

        expect(moment().diff(startTime)).toBeLessThan(8000)

        done()
      } catch (e) {
        done(e)
      }
    }

    test('0 <= N <= 20', (done) => {
      expectTrue(0, 20, done)
    }, 10000)

    test('0 <= N <= 100', (done) => {
      expectTrue(0, 100, done)
    }, 10000)

    test('0 <= N <= 10000', (done) => {
      expectTrue(0, 10000, done)
    }, 10000)

    test('0 <= N <= 1000000', (done) => {
      expectTrue(0, 1000000, done)
    }, 10000)

    test('0 <= N <= 1000000000', (done) => {
      expectTrue(0, 1000000000, done)
    }, 10000)
  })
})
