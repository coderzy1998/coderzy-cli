#!/usr/bin/env node
const { program } = require('commander')

program.version(require('./package.json').version)

program.parse()