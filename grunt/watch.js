module.exports = {
	sass: {
		files: ['<%= build %>/css/*.sass', '<%= build %>/css/**/*.sass'],
		tasks: ['render-css']
	},
	js: {
		files: ['<%= build %>/scripts/load.js', '<%= build %>/scripts/functions.js'],
		tasks: ['render-js']
	}
};