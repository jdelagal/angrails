// Karma configuration
// Generated on Sat Mar 01 2014 12:27:10 GMT-0600 (Central Standard Time)

module.exports = function (config) {
	config.set({

		// base path, that will be used to resolve files and exclude
		basePath: './../../../',


		// frameworks to use
		frameworks: ['jasmine'],


		// list of files / patterns to load in the browser
		files: [
			'grails-app/assets/bower_components/jquery/dist/jquery.js',
			'grails-app/assets/bower_components/angular/angular.js',
			'grails-app/assets/javascripts/**/*.js',
			'test/javascript/lib/bower_components/angular-mocks/angular-mocks.js',
			'test/javascript/unit/**/*.js'
		],


		// list of files to exclude
		exclude: [

		],


		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		reporters: ['progress'],


		// web server port
		port: 8001,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera (has to be installed with `npm install karma-opera-launcher`)
		// - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
		// - PhantomJS
		// - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
		browsers: ['Chrome', 'PhantomJS'],


		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,


		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false,

		plugins: [
			'karma-jasmine',
			'karma-chrome-launcher',
			'karma-phantomjs-launcher',
			'karma-remote-reporter'
		]
	});
};
