const fs = require('fs')

const stringify = (obj) => {
  const EOL = '\n'
  const str = JSON.stringify(obj)
  return str.replace(/\n/g, EOL) + EOL
}

const writeFile = (theme) => {
  const { filename, symbol, wordClasses, content, related } = theme
  fs.writeFileSync(`${__dirname}/assets/color/${filename}.json`, stringify({
    symbol,
    wordClasses,
    content,
    related,
  }))
}

module.exports = {
  writeFile,
}