const chalk = require('chalk')
const log = console.log

const paintSymbol = (symbol) => {
  log(chalk.cyan(symbol.reduce((str, el) => str += '  ' + el), ''))
}

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
  paintSymbol(word.symbol)
  word.translation.map(el => paintTranslation(el))
  word.changes.map(el => paintChange(el))
}

module.exports = {
  painting,
  warning,
}