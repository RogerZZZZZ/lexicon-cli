const CHIESE_DETECT_REG = /^[\u4E00-\u9FFF\u3400-\u4DFF]+$/;

const detectIfChinese = (word) => {
  return CHIESE_DETECT_REG.test(word)
}

const returnProperCode = (word) => {
  return encodeURI(word)
}

module.exports = {
  detectIfChinese,
  returnProperCode,
}