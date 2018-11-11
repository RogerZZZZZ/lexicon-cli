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
  log(`${chalk.hex(theme.propTitle)(translation[0])}: ${chalk.hex(theme.prop)(translation[1])}`)
}

const paintChange = (change) => {
  log(`${chalk.hex(theme.changes)(change)}`)
}

const warning = (word) => log(chalk.keyword(word))

const painting = (word, opt) => {
  paintSymbol(word.symbol)
  word.translation.map(el => paintTranslation(el))
  word.changes.map(el => paintChange(el))
}

module.exports = {
  painting,
  warning,
}