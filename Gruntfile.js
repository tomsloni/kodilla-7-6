module.exports = function(grunt) {

	//Project config
	grunt.initConfig({
		watch: { 
			scripts: { 
				files: 
					['sass/*.sass'], 
				tasks: 
					['sass'], 
				options: { 
					spawn: false, 
				}
			}
		},		
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'sass',
					src: '**/*.sass',
					dest: 'css/',
					ext: '.css'		
				}]
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images',
					src: '**/*.{png,jpg,gif}',
					dest: 'images/build/'
				}]
			}
		},
		browserSync: {
			bsFiles: {
				src : 'css/**/*.css'
			},
			options: {
				watchTask: true,
				server: {
					baseDir: "./"
				}
			}
		}
	})

	//Load the plugins tasks
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-watch');	
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	//Default tasks

	grunt.registerTask('default', ['browserSync','sass', 'imagemin', 'watch']);
}