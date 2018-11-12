#!/usr/bin/env node

const program = require('commander')
const { search, theme } = require('./back/core')

const opt = {
  fuzzy: true,
}

program
  .version('0.0.1')
  .option('-t, --theme', 'Choose another theme!')
  .parse(process.argv)

if (program.theme) {
  theme()
} else {
  search(program.args.join(' '), opt)
}
