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
  .description('Query <word>')
  .option('-f, --fuzzy', 'With fuzzy matching')
  .option('-e, --example', 'With examples')
  .action((word, cmd) => {
    search(word, Object.assign(opt, cmd))
  })

program
  .on('command:*', () => {
    console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '))
    process.exit(1)
  })

program.parse(process.argv)