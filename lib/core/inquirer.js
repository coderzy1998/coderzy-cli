const inquirer = require('inquirer')

const createInquirer = () =>
  inquirer.prompt([
    {
      type: 'list',
      name: 'language',
      message: 'Which programing language do you use?',
      choices: [
        {
          name: 'JavaScript',
          value: 'js'
        },
        {
          name: 'TypeScript',
          value: 'ts'
        }
      ],
      default: 'js'
    },
    {
      type: 'list',
      name: 'tool',
      message: 'yarn or npm?',
      choices: [
        {
          name: 'yarn',
          value: 'yarn'
        },
        {
          name: 'npm',
          value: 'npm'
        }
      ],
      default: 'npm'
    }
  ])

module.exports = {
  createInquirer
}