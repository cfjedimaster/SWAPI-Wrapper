module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'lib/swapi.js',
        dest: 'lib/swapi.min.js'
      }
    },
    jshint: {
      all: ['lib/swapi.js']
    },
    jasmine: {
      all: {
        src: 'lib/swapi.js',
        options: {
          specs: 'tests/spec/swapiSpec.js',
          '--web-security': false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['jasmine', 'jshint', 'uglify']);

};
