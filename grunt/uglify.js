module.exports = {
    bower_js_files: {
        files: {
            '<%= build %>/js/libraries.min.js': [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/modernizr/modernizr.js'
            ]
        }
    },
    custom_js_files: {
        files: {
            '<%= build %>/js/functions.min.js': '<%= build %>/js/functions.js',
            '<%= build %>/js/load.min.js': '<%= build %>/js/load.js'
        }
    }
};