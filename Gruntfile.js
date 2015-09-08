module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      target: {
        options: {
          sourcemap: 'none',
          style: 'compact'
        },
        files: {'public/style/style.css':'preprocess/style/style.scss'}
      }
    },
    postcss: {
      options: {
        map: false,
        processors: [require('autoprefixer-core')({browsers: 'last 2 versions'})]
      },
      target: {src:'public/style/style.css'}
    },
    jshint: {
      options: {
        laxcomma: true
      },
      files: ['Gruntfile.js', 'public/js/**/*.js']
    },
    watch: {
      css: {
        files: ['preprocess/style/**/*.scss'],
        tasks: ['sass','postcss'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['public/js/**/*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      }
    }
  });
  grunt.registerTask('default', ['watch']);
};
