// Generated by CoffeeScript 1.7.1
(function() {
  module.exports = (function(_this) {
    return function(grunt, options) {
      return {
        all: {
          options: {
            urls: ['http://127.0.0.1:9999/test/runner.html'],
            username: 'es6projectstarterkit',
            key: 'bedf1991-5777-472f-8e14-3cde10fbd01f',
            browsers: grunt.file.readJSON('test/saucelabs-browsers.json'),
            build: process.env.TRAVIS_JOB_ID,
            testname: options.pkg.name,
            sauceConfig: {
              'video-upload-on-pass': false
            }
          }
        }
      };
    };
  })(this);

}).call(this);