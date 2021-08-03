const { program } = require('commander')

const { createProjectAction, createPageAction } = require('./actions')

const createProjectCommand = () => {
  program
    .command('create <project>')
    .description('coderzy will help you to create a react app')
    .action(createProjectAction)
}

const createPageCommand = () => {
  program
    .command('addpage <page>')
    .description('coderzy will help you to create a page component in "src/Pages" [-d dest]')
    .action(page => {
      createPageAction(page, program.opts().dest || 'src/Pages')
    })
}

module.exports = {
  createProjectCommand,
  createPageCommand
}