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
      const phoneticSymbol = $('.base-speak span').each(function() {
        const val = $(this).find('span').text()
        console.log(val)
      })

      const translation = $('.base-list.switch_part li').each(function() {
        let content = ''
        $(this).find('span').each(function() {
          content += $(this).text()
        })
        console.log(content)
      })

      const arr = []
      const change = $('.change.clearfix span').each(function() {
        arr.push($(this).text() + $(this).find('a').text())
      })
      console.log(arr)
    }
    done()
  }
}])