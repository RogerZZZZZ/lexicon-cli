#!/usr/bin/env node

const program = require('commander')
const { search, theme, addTheme } = require('./back/core')

// default config
const defultConfig = {}

program
  .version('0.0.1')
  .option('-t, --theme', 'Choose another theme!')
  .option('-a, --addTheme', 'Add theme you like!')
  .parse(process.argv)

if (program.theme) {
  theme()
} else if (program.addTheme) {
  addTheme()
} else {
  search(program.args.join(' '), defultConfig)
}
