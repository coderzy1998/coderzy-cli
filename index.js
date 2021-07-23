#!/usr/bin/env node
const { program } = require('commander')

const helpOptions = require('./lib/core/helpOptions')
const { createProjectCommand } = require('./lib/core/commands')

program.version(require('./package.json').version)

helpOptions()
createProjectCommand()

program.parse()