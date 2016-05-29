module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      babel: {
        options: {
            sourceMap: true,
            presets: ['es2015']
      },
      dist: {
        files: {
          'js/script.js': 'js/src/script.js'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      babel: {
        files: ['js/src/*.js'],
        tasks: ['babel'],
        options: {
          spawn: false
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['babel', 'watch']);

};