'use strict';
module.exports = function(grunt) {
  // Load Grunt Tasks
  require('load-grunt-tasks')(grunt);

  // Initialize the Grunt object
  grunt.config.init({
    pkg: grunt.file.readJSON('package.json')
  });

  // Merge Style Tasks
  grunt.config.merge({
    // Autoprefixer
    autoprefixer: {
      dist: {
        files: {
          'build/application.css': 'assets/stylesheets/application.css'
        }
      }
    },

    // CSS Compilation
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/application.css': [
            'vendor/assets/stylesheets/resormalize.css',
            'build/application.css'
          ]
        }
      }
    },

    // Compile Sass
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'assets/stylesheets/application.css': 'assets/stylesheets/base.scss'
        }
      }
    },

    // LiveReload
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'autoprefixer', 'cssmin'],
        options: {
          spawn: false
        }
      }
    }
  });

  // Merge Tasks for JavaScript
  grunt.config.merge({
    // Concatenate JS Files
    concat: {
      dist: {
        options: {
          separator: ';'
        },
        src: [
          'vendor/assets/javascripts/**/*.js',
          'assets/javascripts/all-tags.js',
          'assets/javascripts/helpers.js',
          'assets/javascripts/visual.js',
          'assets/javascripts/mobile_visual.js',
          'assets/javascripts/application.js'
        ],
        dest: 'build/application.js',
      }
    },

    // Lint JavaScript with JSHint
    jshint: {
      files: {
        src: ['assets/javascripts/*.js', 'vendor/assets/javascripts/*.js']
      }
    },

    // Uglify JavaScript
    uglify: {
      options: {
        mangle: false
      },
      build: {
        src: 'build/application.js',
        dest: 'dist/js/application.js'
      }
    },

    // LiveReload
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: '**/*.js',
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false
        }
      }
    }
  });

  // Clean
  grunt.config.merge({
    clean: ['build']
  });

  // Local Server
  grunt.config.merge({
    connect: {
      server: {
        options: {
          keepalive: true
        }
      }
    }
  });

  // Register Tasks
  grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'concat', 'uglify', 'watch']);
};
