const Crawler = require('crawler')

const c = new Crawler({
  maxConnections: 1,
})

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
      const result = $('.base-speak')
      console.log(result)
    }
    done()
  }
}])