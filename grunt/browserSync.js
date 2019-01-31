module.exports = {
    bsFiles: {
        src: [
        '<%= build %>/scripts/*.min.js',
        '<%= build %>/css/*.min.css',
        '<%= build %>/*.html',
        '<%= build %>/images/*.jpg',
        '<%= build %>/images/*.jpeg',
        '<%= build %>/images/*.gif'
        ]
    },
    options: {
        proxy: 'localhost:<%= port %>',
        port: '<%= port %>',
        open: true,
        watchTask: true
    }
};