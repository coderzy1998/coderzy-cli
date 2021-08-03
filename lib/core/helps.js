const { program } = require('commander')

const helpOptions = () => {
  program.option('-z --zy', 'a coderzy option')
  program.option('-d --dest <dest>', 'a destination folder, 例如: -d src/Pages, 错误/src/Pages')
}

module.exports = helpOptions