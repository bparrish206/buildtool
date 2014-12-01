'use strict';

module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({
      sass:{
          compile: {
            files: {
              'app/css/main.css':'app/scss/main.scss'
            }
          }
      },

      clean: {
        dev: {
          src: ['build/']
        }
      },

      copy: {
        dev: {
          cwd: 'app/',
          src: ['**/*.html', 'css/**/*.css'],
          expand: true,
          dest: 'build'
        }
      },

      browserify: {
        dev: {
          require : { jquery : 'jquery-browserify' },
          src: ['app/js**/*.js'],
          dest: 'build/bundle.js',
          options: {
            transform: ['debowerify']
          }
        },

        test: {
          src: ['test/client/**/*test.js'],
          dest: 'test/test_bundle.js',
          options: {
            transform: ['debowerify']
          }
        }
      },

      jshint: {
      all: ['app/js**/*.js'],
      options: {
        jshintrc: true
      }
    },

      jscs: {
      src: ['app/js**/*.js', 'test/server_test.js'],
      options: {
        config: '.jscsrc'
      }
    }

  });
  grunt.registerTask('build:dev', ['sass', 'clean:dev', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('test', ['jshint', 'jscs']);
  grunt.registerTask('default', ['test']);
};
