module.exports = {
    images: {
        options: {
            progressive: true
        },
        files: [{
            expand: true,
            cwd: '<%= themedir %>/images/',
            dest: '<%= themedir %>/images/',
            src: ['*.{jpeg,png,jpg,gif}']
        }]
    }
};