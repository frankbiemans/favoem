module.exports = {
	dist: {
		files: {
			'<%= build %>/css/style.css': '<%= build %>/css/base.sass'
		}
	},
	bootstrap: {
		files: {
			'node_modules/bootstrap/scss/bootstrap-custom.css': 'node_modules/bootstrap/scss/bootstrap-custom.scss'
		}
	}
};