module.exports = (grunt) => {
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-mocha-istanbul');

    grunt.initConfig({
        eslint: {
            target: ['index.js', 'stack.test.js']
        },
        mochaTest: {
            files: ['stack.test.js']
        },
        mocha_istanbul: {
            coverage: {
                src: './',
                options: {
                    mask: 'stack.test.js'
                }
            }
        }
    });


    grunt.registerTask('lint', ['eslint']);
    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('coverage', ['mocha_istanbul']);
};
