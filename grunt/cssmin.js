module.exports = {
    options: {
        keepSpecialComments: 0
    },
	bower_css_files: {
		files: {
			'<%= build %>/css/libraries.min.css': [
			'bower_components/normalize-css/normalize.css',
			'node_modules/bootstrap/scss/bootstrap-custom.css'
			]
		}
	}
};