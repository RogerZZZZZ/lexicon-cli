const Crawler = require('crawler')

const c = new Crawler({
  maxConnections: 1,
})

class Word {
  constructor(symbol, translation, changes) {
    this.symbol = symbol
    this.translation = translation
    this.changes = changes
  }
}

c.queue([{
  uri: 'http://www.iciba.com/pig',
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

      const symbols = {}
      $('.base-speak span span').each(function(idx) {
        const val = $(this).text()
        if (idx === 0) {
          symbols['en'] = val
        } else {
          symbols['us'] = val
        }
      })

      const translations = []
      $('.base-list.switch_part li').each(function() {
        let content = ''
        $(this).find('span').each(function() {
          content += $(this).text()
        })
        translations.push(content)
      })

      const changes = []
      $('.change.clearfix span').each(function() {
        changes.push($(this).text() + $(this).find('a').text())
      })

      const word = new Word(symbols, translations, changes)
      console.log(word)
    }
    done()
  }
}])