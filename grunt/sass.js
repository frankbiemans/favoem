module.exports = {
	dist: {
		files: {
			'<%= build %>/css/style.css': '<%= build %>/css/base.sass'
		}
	},
	bootstrap: {
		files: {
			'bower_components/bootstrap/dist/css/bootstrap-custom.css': 'bower_components/bootstrap/scss/bootstrap-custom.scss'
		}
	}
};