import { add } from './math'

describe('lib/math', () => {
  describe('add', () => {
    it('returns sum of 1, 2, 3, 4, 5 (14)', () => {
      const result = add(1, 2, 3, 4, 5)
      expect(result).toBe(15)
    })
    it('returns sum of -4 + -6, -10', () => {
      const result = add(-4, -6)
      expect(result).toBe(-10)
    })
    it('returns sum of 4 + 0, 4', () => {
      const result = add(4, 0)
      expect(result).toBe(4)
    })
  })
})
