module.exports = {
    bsFiles: {
        src: [
        '<%= build %>/js/*.min.js',
        '<%= build %>/js/app.js',
        '<%= build %>/css/*.min.css',
        '<%= build %>/*.php'
        ]
    },
    options: {
        proxy: 'localhost:<%= port %>',
        port: '<%= port %>',
        open: true,
        watchTask: true
    }
};