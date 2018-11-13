#!/usr/bin/env node

const program = require('commander')
const { search, theme } = require('./back/core')

// default config
const defultConfig = {}

program
  .version('0.0.1')
  .option('-t, --theme', 'Choose another theme!')
  .parse(process.argv)

if (program.theme) {
  theme()
} else {
  search(program.args.join(' '), defultConfig)
}
