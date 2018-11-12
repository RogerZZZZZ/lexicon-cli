const chalk = require('chalk')
const log = console.log

const paintWord = (word) => log(chalk.bold.blue(word))

const paintSymbol = (symbol) => log(chalk.cyan(symbol))

/**
 * @param {*} translations 
 * e.g. ['n', 'cool,good']
 */
const paintTranslation = (translation) => {
  log(`${chalk.blue(translation[0])}: ${chalk.whiteBright(translation[1])}`)
}

const paintChange = (change) => {
  log(`${chalk.whiteBright(change)}`)
}

const warning = (word) => log(chalk.keyword(word))

const painting = (word, opt) => {
  // paintWord(word.word)
  word.symbol.map(el => paintSymbol(el))
  word.translation.map(el => paintTranslation(el))
  word.changes.map(el => paintChange(el))
}

module.exports = {
  painting,
  warning,
}