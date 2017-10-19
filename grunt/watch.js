module.exports = {
	sass: {
		files: ['<%= build %>/css/base.sass', '<%= build %>/css/media-queries.sass'],
		tasks: ['render-css']
	},
	js: {
		files: ['<%= build %>/js/load.js', '<%= build %>/js/functions.js'],
		tasks: ['render-js']
	},
	browserify: {
		files: ['<%= build %>/js/app-setup.js'],
		tasks: ['browserify']
	}
};