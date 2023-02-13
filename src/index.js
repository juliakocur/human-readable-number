module.exports = function toReadable (number) {
    const dg = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
  const tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

  const words = (number, x = true) => {
    if (number >= 100) {
      const hundred = Math.trunc(number / 100)
      number = number - hundred * 100
      return `${dg[hundred - 1]} hundred${number ? (" " + words(number, false)) : ""}`
    } else if (20 <= number) {
      const ten = Math.trunc(number / 10)
      number = number - ten * 10
      return `${tens[ten - 2]}${number ? (" " + words(number, false)) : ""}`
    } else if (1 <= number) return dg[number - 1]
    else if (x) return "zero"
  }
  return words(number)
}
