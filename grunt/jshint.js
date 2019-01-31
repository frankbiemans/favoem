module.exports = {
    files: [
    '<%= build %>/scripts/functions.js',
    '<%= build %>/scripts/load.js'
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