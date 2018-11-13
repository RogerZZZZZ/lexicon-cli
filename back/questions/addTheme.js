const colorReg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

const validation = (value) => {
  if (colorReg.test(value)) {
    return true
  } else {
    return 'Please input a valid hex value. e.g. #333 or #3e3e3e'
  }
}

const addThemeQ = [{
  type: 'input',
  name: 'filename',
  message: 'Input theme name',
}, {
  type: 'input',
  name: 'symbol',
  message: 'Input the color for symbol part:',
  validate: validation,
}, {
  type: 'input',
  name: 'wordClasses',
  message: 'Input the color for word-classes part:',
  validate: validation
}, {
  type: 'input',
  name: 'content',
  message: 'Input the color for translation part:',
  validate: validation
}, {
  type: 'input',
  name: 'related',
  message: 'Input the color for related word part:',
  validate: validation
}]

module.exports = {
  addThemeQ,
}