'use strict'

import gulp from 'gulp'
import path from 'path'
import includeAll from 'include-all'

const options = {
  dest                   : './lib',
  src                    : ['src/**/*.js']
}

function loadTasks (relPath) {
  return includeAll(
    {
      dirname: path.resolve(__dirname, relPath),
      filter : /(.+)\.js$/
    }
  ) || {}
}

function invokeTaskFn (tasks) {
  for (let taskName in tasks) {
    if (tasks.hasOwnProperty(taskName)) {
      tasks[taskName](gulp, options)
    }
  }
}

// Load task functions
let tasks = loadTasks('./tasks')

// (ensure that a default task exists)
if (!tasks.default) {
  tasks.default = (gulp) => { gulp.task('default', []); };
}

// Run task functions to configure Grunt.
invokeTaskFn(tasks)
