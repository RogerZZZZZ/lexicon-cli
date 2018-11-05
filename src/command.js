const program = require('commander')

const { query } = require('./query')

program
  .version('0.0.1')
  .description('test description')

program
  .command('query <word>')
  .alias('q')
  .description('Begin to query')
  .action((word) => {
    query(word)
  })

program.parse(process.argv)