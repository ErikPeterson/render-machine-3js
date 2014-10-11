module.exports = function(grunt){

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        simplemocha:{
            all:{
                options:{
                    reporter: 'spec',
                    ui: 'bdd',
                },
                src: ['test/tests.js']
            },
            coverage: {
                options:{
                    reporter: 'mocha-text-cov',
                    ui: 'bdd',
                },
                src: ['tests/tests.js']
            },
            htmlcov:{
                options:{
                    reporter: 'html-cov',
                    ui: 'bdd'
                },
                src: ['tests/tests.js']
            }
        },
        blanket: {
            options:{},
            files: {
                expand: false,
                src: ['./lib/'],
                dest: './test/coverage/'
            },
          }
    });

    grunt.registerTask('test', ['blanket','simplemocha:all','simplemocha:coverage']);
    grunt.registerTask('report', 'Generate HTML coverage report file', function(){
        grunt.task.run('blanket');
        var exec = require('child_process').exec;
        exec('mocha test/tests.js --ui bdd --reporter html-cov > test/coverage/html/coverage.html');
    });
};