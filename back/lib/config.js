const json = require('json-file')
const file = json.read('../config.json')

const readTheme = () => {
  const { theme } = file.data
  return json.read(`../assets/color/${theme}.json`)
}

const changeTheme = (name) => {
  file.set('theme', name)
}

module.exports = {
  readTheme,
  changeTheme,
}