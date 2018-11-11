const json = require('json-file')
const file = json.read('../config.json')
const fs = require('fs')

const themeFolder = '../assets/color/'

const readTheme = () => {
  const { theme } = file.data
  return json.read(`../assets/color/${theme}`)
}

const changeTheme = (name) => {
  file.set('theme', name)
  file.writeSync()
}

const themeList = () => {
  return fs.readdirSync(themeFolder)
}

module.exports = {
  readTheme,
  changeTheme,
  themeList,
}