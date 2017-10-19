module.exports = {
    files: [
    '<%= build %>/js/functions.js',
    '<%= build %>/js/load.js'
    ],
    options: {
        expr: true,
        globals: {
            jQuery: true,
            console: true,
            module: true,
            document: true
        }
    }
};