export function commaSeparatedToArray(string) {
  const splitString = string.split(',')
  const trimmedWords = splitString.map(word => word.trim())
  const titleCases = trimmedWords.map(entry => {
    const split = entry.split(' ')
    const splitCapitalized = split.map(word => {
      if (word.length > 1) {
        const trimmed = word.trim()
        return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase()
      } else {
        return word
      }
    })
    const capitalizedJoined = splitCapitalized.join(' ')
    return capitalizedJoined
  })
  const sortedWords = titleCases.sort()
  const singleInstances = sortedWords.filter(
    (word, index) => index === sortedWords.indexOf(word)
  )

  return singleInstances
}
