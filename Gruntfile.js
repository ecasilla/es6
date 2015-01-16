// Generated by CoffeeScript 1.7.1
(function() {
  module.exports = function(grunt) {
    var tasks;
    require('load-grunt-tasks')(grunt);
    tasks = require('load-grunt-configs')(grunt, {
      config: {
        src: ['tasks/*.coffee', 'tasks/*.js']
      },
      scriptName: 'Greeter',
      pkg: grunt.file.readJSON('package.json'),
      now: new Date().getTime()
    });
    grunt.initConfig(tasks);
    grunt.registerTask('build', ['clean:build', 'jshint', '6to5', 'requirejs', 'clean:tmp']);
    grunt.registerTask('test', ['build', 'mocha']);
    grunt.registerTask('saucelabs', ['connect', 'saucelabs-mocha']);
    grunt.registerTask('default', ['build', 'mocha']);
  };

}).call(this);