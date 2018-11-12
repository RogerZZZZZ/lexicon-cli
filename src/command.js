const program = require('commander')
const { search, theme } = require('../back/core')

const opt = {
  fuzzy: true,
}

program
  .version('0.0.1')
  .description('test description')

program
  .command('query <word>')
  .alias('q')
  .description('Query <word>')
  // .option('-f, --fuzzy', 'With fuzzy matching')
  .action((word, cmd) => {
    search(word, Object.assign(opt, cmd))
  })

program
  .command('theme')
  .alias('t')
  .description('Choose another theme!')
  .action(() => theme())

program
  .on('command:*', () => {
    console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '))
    process.exit(1)
  })

program.parse(process.argv)