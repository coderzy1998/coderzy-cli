const { promisify } = require('util')
const download = promisify(require('download-git-repo'))

const { reactRepo } = require('../config/repo')
const { commandSpawn } = require('../util/terminal')

const createProjectAction = async (project) => {
  console.log('coderzy is helping you to create project...')
  // 1.git clone
  await download(reactRepo, project, { clone: true })

  // 2.执行yarn install
  const command = process.platform === 'win32' ? 'yarn.cmd' : 'yarn'
  await commandSpawn(command, ['install'], { cwd: `./${project}` })

  // 3.执行yarn start
  await commandSpawn(command, ['start'], { cwd: `./${project}` })
}

module.exports ={
  createProjectAction
}