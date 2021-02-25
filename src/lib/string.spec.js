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
      expect(result).toStrictEqual(['John', 'Jane', 'Joe'])
    })
  })
})
