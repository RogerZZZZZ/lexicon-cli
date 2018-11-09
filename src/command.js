#!/usr/bin/env node

const program = require('commander')

const { query } = require('./query')
const { search } = require('../back/crawler')

program
  .version('0.0.1')
  .description('test description')

program
  .command('query <word>')
  .alias('q')
  .description('Begin to query')
  .action((word) => {
    search(word)
  })

program.parse(process.argv)