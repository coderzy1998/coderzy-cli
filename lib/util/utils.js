const ejs = require('ejs')
const path = require('path')
const fs = require('fs')

// 编译文件
const complie = (filename, data) => {
  const pathname = path.resolve(__dirname, `../templates/${filename}`)
  return new Promise((resolve, reject) => {
    ejs.renderFile(pathname, data, {}, (err, res) => {
      if(err) {
        console.log(err)
        reject(err)

        return
      }

      resolve(res)
    })
  })
}

// 写入文件
const writeToFile = (path, data) => {
  return fs.promises.writeFile(path, data)
}

// 创建路径
const createDir = (pathName) => {
  if(fs.existsSync(pathName)) {
    return true
  }

  if(createDir(path.dirname(pathName))) {
    fs.mkdirSync(pathName)

    return true
  }
}

module.exports = {
  complie,
  writeToFile,
  createDir
}