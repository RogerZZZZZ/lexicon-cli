const ora = require('ora')

class Spinner {
  create() {
    if (!this.spinner) {
      this.spinner = ora('Searching....')
    }
    return this.load()
  }

  load() {
    this.spinner.start()
  }

  stop() {
    this.spinner.stop()
  }

  success(text) {
    this.spinner.succeed(text)
  }

  warn(text) {
    this.spinner.warn(text)
  }

  info(text) {
    this.spinner.info(text)
  }
}

const spinner = new Spinner()

module.exports = {
  spinner
}