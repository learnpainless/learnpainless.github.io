const fs = require('fs')
const path = require('path')

module.exports = {
  interfaces: fs.readFileSync(path.join(__dirname, 'interfaces.gql'), 'utf8'),
  file: fs.readFileSync(path.join(__dirname, 'file.gql'), 'utf8'),
}