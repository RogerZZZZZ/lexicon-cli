const inquirer = require('inquirer')
const { query } = require('./lib/crawler')
const { painting } = require('./lib/painter')
const { suggest } = require('./lib/typo')

const search = (word, opt) => {
  if (opt.fuzzy) {
    let suggestions = suggest(word)
    if (suggestions.length >= 1) {
      const question = {
        type: 'list',
        name: 'word',
        message: 'Choose one word you may want to query.',
        choices: suggestions,
      }
      inquirer
        .prompt(question)
        .then(answer => {
          query(answer.word, painting)
        })
      return;
    }
  }
  query(word, painting)
}

module.exports = {
  search,
}
