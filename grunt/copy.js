module.exports = {
	wordpress: {
		files: [{
			expand: true,
			cwd: 'downloads/wordpress/',
			src: ['*', '**/*'],
			dest: 'build/'
		}]
	}
};