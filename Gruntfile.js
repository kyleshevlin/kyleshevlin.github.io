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
    // Compile Sass
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'tmp/compiled.css': 'app/scss/base.scss'
        }
      }
    },

    // PostCSS
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')(),
          require('cssnano')()
        ]
      },
      dist: {
        src: 'tmp/compiled.css',
        dest: 'dist/css/bundle.css'
      }
    },

    // LiveReload
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'postcss', 'clean:tmp'],
        options: {
          spawn: false
        }
      }
    }
  });

  // Clean
  grunt.config.merge({
    clean: {
      tmp: ['tmp']
    }
  });

  // Register Tasks
  grunt.registerTask('styles', ['sass', 'postcss', 'clean:tmp'])
  grunt.registerTask('default', ['styles', 'watch']);
};
