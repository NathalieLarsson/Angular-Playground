module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		less: {
			development: {
				files: {
					'core/styles.css': 'static/less/manifest.less'
				},
				options: {
					compress: false,
					yuicompress: false,
					dumpLineNumbers: 'comments',
					sourceMap: false
				},
				expand: true
			}
		},
		watch: {
			css: {
				files: ['static/less/**/*.less'],
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
