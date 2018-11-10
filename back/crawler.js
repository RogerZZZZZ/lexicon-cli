const Crawler = require('crawler')
const { painting } = require('./painter')
const { spinner } = require('./spinner')

class Word {
  constructor(word, symbol, translation, changes) {
    this.word = word
    this.symbol = symbol
    this.translation = translation
    this.changes = changes
  }
}

const search = (word, opt) => {
  spinner.create()
  const c = new Crawler({
    maxConnections: 1,
  })

  c.queue([{
    uri: `http://www.iciba.com/${word}`,
    jQuery: {
      name: 'cheerio',
      options: {
        normalizeWhitespace: true,
        xmlMode: true,
      }
    },
    callback: function(error, res, done) {
      if (error) {
        console.log(error)
      } else {
        const $ = res.$
  
        const symbols = []
        $('.base-speak span span').each(function() {
          const val = $(this).text()
          symbols.push(val)
        })
  
        const translations = []
        $('.base-list.switch_part li').each(function() {
          let content = ''
          let prop = $(this).find('.prop').text()
          $(this).find('p span').each(function() {
            content += $(this).text()
          })
          translations.push([prop, content])
        })
  
        const changes = []
        $('.change.clearfix span').each(function() {
          changes.push([$(this).text()])
        })
  
        spinner.success('Results are below:')
        painting(new Word(word, symbols, translations, changes))
      }
      done()
    }
  }])
}

module.exports = {
  search,
}