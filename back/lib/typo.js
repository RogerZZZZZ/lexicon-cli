const Typo = require('typo-js')
const dictionary = new Typo('en_US')

const suggest = (input) => {
  return dictionary.suggest(input)
}

const check = (input) => {
  return dictionary.check(input)
}

module.exports = {
  suggest,
  check,
}
