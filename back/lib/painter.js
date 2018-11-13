const chalk = require('chalk')
const log = console.log
const { readTheme } = require('./config')
const theme = readTheme().data

const combineInLine = (arr) => {
  if (arr.length < 1) return ''
  if (arr.length === 2) return arr[0]
  return arr.reduce((str, el) => str += '  ' + el, '')
}

const paintSymbol = (symbol) => {
  log(chalk.hex(theme.symbol)(combineInLine(symbol)))
}

/**
 * @param {*} translations 
 * e.g. ['n', 'cool,good']
 */
const paintTranslation = (translation) => {
  log(`${chalk.hex(theme.wordClasses)(translation[0])}: ${chalk.hex(theme.content)(translation[1])}`)
}

const paintRelated = (related) => {
  log(`${chalk.hex(theme.related)(related)}`)
}

const warning = (word) => log(chalk.keyword(word))

const painting = (word, opt) => {
  paintSymbol(word.symbol)
  word.translation.map(el => paintTranslation(el))
  word.related.map(el => paintRelated(el))
}

module.exports = {
  painting,
  warning,
}