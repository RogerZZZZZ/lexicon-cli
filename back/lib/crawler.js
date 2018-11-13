const Crawler = require('crawler')
const { spinner } = require('./spinner')
const { isEmpty } = require('./helper')

const c = new Crawler({
  maxConnections: 1,
})

class Word {
  constructor(word, symbol, translation, changes) {
    this.word = word
    this.symbol = symbol
    this.translation = translation
    this.changes = changes
  }
}

const query = (word, opts, cb) => {
  spinner.create()

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
        spinner.fail(`Catch error: : ${error}`)
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

        if (isEmpty(symbols) && isEmpty(translations) && isEmpty(changes)) {
          spinner.warn(`Fail to find this word: ${word}`)
        } else {
          spinner.success('Results are below:')
          cb(new Word(word, symbols, translations, changes))
        }
      }
      done()
    }
  }])
}

module.exports = {
  query,
}