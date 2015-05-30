
module.exports = function(grunt) {

  // Project configuration.
  var compass = require('compass-importer');

  grunt.initConfig({

    // Grunt-sass 
    sass: {
      app: {
        files: [{
          expand: true,
          cwd: 'public_html/scss',
          src: ['*.scss'],
          dest: 'public_html/css',
          ext: '.css'
        }]
      },
      options: {
        sourceMap: true, 
        outputStyle: 'nested', 
        imagePath: "../",
        includePaths: ['.compass'],
        importer: compass
      }
    },

    // Coffee
    coffee: {
      options: {
        sourceMap: true
      },
      compile: {
        files: {'public_html/js/main.js': 'public_html/coffee/main.coffee'}
      }
    },

    // Concat
    concat: {
      options: {
        separator: ";"
      },
      dist: {
        src: ['bower_components/jquery/dist/jquery.min.js'],
        dest: 'public_html/js/libs.js'
      }
    },

    // Uglify
    uglify: {
      dist: {
        files: {
          'public_html/js/main.min.js': 'public_html/js/main.js'
        }
      }
    },

    // Grunt-contrib-watch
    watch: {
      sass: {
        files: ['public_html/scss/*.scss'],
        tasks: ['sass']
      },
      coffee: {
        files: ['public_html/coffee/*.coffee'],
        tasks: ['coffee']
      },
      options: {
        livereload: true,
        spawn: false
      }
    },
  });

  // Loads Grunt Tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'concat', 'coffee', 'uglify']);
  //grunt.registerTask('wa', ['watch']);
}