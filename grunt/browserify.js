module.exports = {
	dist: {
		files: {
			'<%= build %>/scripts/app.js': ['<%= build %>/scripts/app-setup.js']
		}
	}
};