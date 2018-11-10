#!/usr/bin/env node

const program = require('commander')
const { search } = require('../back/core')

const opt = {
  fuzzy: false,
}

program
  .version('0.0.1')
  .description('test description')

program
  .command('query <word>')
  .alias('q')
  .description('Begin to query')
  .option('-f, --fuzzy', 'With fuzzy matching')
  .action((word, cmd) => {
    search(word, Object.assign(opt, cmd))
  })


program.parse(process.argv)