#!/usr/bin/env node
const { program } = require('commander')

const helpOptions = require('./lib/core/helps')
const { createProjectCommand, createPageCommand } = require('./lib/core/commands')

program.version(require('./package.json').version)

helpOptions()

createProjectCommand()

createPageCommand()

program.parse(process.argv)