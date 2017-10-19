module.exports = {
    options: {
        map: false,
        processors: [
        require('autoprefixer')({
            browsers: 'last 2 versions'
        }),
        require('cssnano')({
            zindex: false,
            discardComments: false
        })
        ]
    },
    dist: {
        src: '<%= build %>/css/style.css',
        dest: '<%= build %>/css/style.min.css'
    }
};