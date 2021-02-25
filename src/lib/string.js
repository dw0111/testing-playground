export function commaSeparatedToArray(string) {
  return string.split(',').map(word => word.trim())
}
