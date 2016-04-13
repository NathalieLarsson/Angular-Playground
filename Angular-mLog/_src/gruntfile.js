module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		less: {
			development: {
				files: {
					'core/styles.css': 'less/manifest.less'
				},
				options: {
					compress: false,
					yuicompress: false,
					dumpLineNumbers: 'comments',
					sourceMap: false,
					sourceMapFilename: '../static/css/styles.css.map',
					sourceMapURL: 'styles.css.map',
					sourceMapBasepath: '../static/css/',
					sourceMapRootpath: '/'
				},
				expand: true
			}
		},
		watch: {
			css: {
				files: ['less/**/*.less'],
				tasks: ['less:development'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
};
