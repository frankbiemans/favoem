module.exports = {

	'default': ['php', 'browserSync', 'watch'],
	'render-css': ['sass:dist', 'postcss:dist'],
	'render-js': ['jsbeautifier', 'jshint', 'uglify:custom_js_files'],
	'render-lib-css': ['concat:bootstrap', 'sass:bootstrap', 'cssmin:bower_css_files']
	
}