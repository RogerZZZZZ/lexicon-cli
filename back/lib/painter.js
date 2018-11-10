const chalk = require('chalk')
const log = console.log

const paintSymbol = (symbol) => log(chalk.cyan(symbol))

/**
 * @param {*} translations 
 * e.g. ['n', 'cool,good']
 */
const paintTranslation = (translation) => {
  log(`${chalk.magenta(translation[0])}: ${chalk.blue(translation[1])}`)
}

const paintChange = (change) => {
  log(`${chalk.yellow(change)}`)
}

const warning = (word) => log(chalk.keyword(word))

const painting = (word, opt) => {
  word.symbol.map(el => paintSymbol(el))
  word.translation.map(el => paintTranslation(el))
  word.changes.map(el => paintChange(el))
}

module.exports = {
  painting,
  warning,
}