const { program } = require('commander')

const { createProjectAction } = require('./actions')

const createProjectCommand = () => {
  program
    .command('create <project>')
    .description('coderzy will help you to create a react app')
    .action(createProjectAction)
}

module.exports = {
  createProjectCommand
}