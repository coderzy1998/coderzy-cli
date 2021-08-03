const path = require('path')
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))

const { reactRepo } = require('../config/repo')
const { commandSpawn } = require('../util/terminal')
const { complie, writeToFile, createDir } = require('../util/utils')

const createProjectAction = async project => {
  console.log('coderzy is helping you to create project...')
  // 1.git clone
  await download(reactRepo, project, { clone: true })

  // 2.执行yarn install
  const command = process.platform === 'win32' ? 'yarn.cmd' : 'yarn'
  await commandSpawn(command, ['install'], { cwd: `./${project}` })

  // 3.执行yarn start
  await commandSpawn(command, ['start'], { cwd: `./${project}` })
}

const createPageAction = async (name, dest) => {
  const pagePath = path.resolve(dest, name)
  const pageRes = await complie('page.ejs', { name })
  const exportPageRes = await complie('exportPage.ejs', { name })
  const storeRes = await complie('store.ejs', { name })

  if(createDir(pagePath)) {
    await writeToFile(path.resolve(__dirname, pagePath, `${name}.tsx`), pageRes)
    await writeToFile(path.resolve(__dirname, pagePath, 'index.ts'), exportPageRes)
    await writeToFile(path.resolve(__dirname, pagePath, 'store.ts'), storeRes)
  }
}

module.exports = {
  createProjectAction,
  createPageAction
}