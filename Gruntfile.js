module.exports = function(grunt) {

	//Project config
	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'css/***.css': 'sass/***.sass'
				}
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['***.{png,jpg,gif}'],
					dest: 'images/build/'
				}]
			}
		},
		browserSync: {
			bsFiles: {
				src : 'assets/css/*.css'
			},
			options: {
				server: {
					baseDir: "./"
				}
			}
		}
	})

	//Load the plugins tasks
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	//Default tasks

	grunt.registerTask('default', ['sass', 'imagemin', 'browserSync']);
}