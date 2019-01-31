module.exports = {
    bower_js_files: {
        files: {
            '<%= build %>/scripts/libraries.min.js': [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/modernizr/modernizr.js'
            ]
        }
    },
    custom_js_files: {
        files: {
            '<%= build %>/scripts/functions.min.js': '<%= build %>/scripts/functions.js',
            '<%= build %>/scripts/load.min.js': '<%= build %>/scripts/load.js'
        }
    }
};