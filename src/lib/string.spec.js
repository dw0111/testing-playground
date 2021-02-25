import { commaSeparatedToArray } from './string'

describe('lib/string.js', () => {
  describe('commaSeparatedToArray', () => {
    it('returns ["a", "b"] for text "a,b"', () => {
      const result = commaSeparatedToArray('a,b')
      expect(result).toStrictEqual(['a', 'b'])
    })
    it('returns ["a", "b"] for text "   a , b  "', () => {
      const result = commaSeparatedToArray('   a , b  ')
      expect(result).toStrictEqual(['a', 'b'])
    })
    it('returns ["a b", "b"] for text "a b, b"', () => {
      const result = commaSeparatedToArray('a b, b')
      expect(result).toStrictEqual(['a b', 'b'])
    })
    it('returns ["John", "Jane", "Joe] for text "John, Jane,Joe"', () => {
      const result = commaSeparatedToArray('John, Jane,Joe')
      expect(result).toStrictEqual(['Jane', 'Joe', 'John'])
    })
    it('returns the array in ascending alphabetical order', () => {
      const result = commaSeparatedToArray('b,a,c')
      expect(result).toStrictEqual(['a', 'b', 'c'])
    })
    it('contains only a single instance of each string', () => {
      const result = commaSeparatedToArray('a, a, b, c, b, d')
      expect(result).toStrictEqual(['a', 'b', 'c', 'd'])
    })
    it('returns all entries capitalized', () => {
      const results = commaSeparatedToArray('john, Jane,berNard, Bernard')
      expect(results).toStrictEqual(['Bernard', 'Jane', 'John'])
    })
  })
})
