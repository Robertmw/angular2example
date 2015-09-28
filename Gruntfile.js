module.exports = function (grunt) {

	grunt.initConfig({
		typescript: {
			base: {
				src: [
				'public/src/components/*',
				'public/src/app.ts'
				],
				dest: 'public/build',
				options: {
					experimentalDecorators: true,
					module: 'commonjs',
					removeComments: true,
					target: 'ES5',
					sourceMap: true,
					watch: {
						after: ['copy'],
						atBegin: true
					}
				}
			}
		},
		copy: {
			main: {
				files: [
				{
					expand: true,
					src: 'public/src/templates/*',
					dest: 'public/build/templates/',
					flatten: true,
					filter: 'isFile'
				},
				{
					expand: true,
					src: 'public/src/index.html',
					dest: 'public/build',
					flatten: true,
					filter: 'isFile'
				}
				]
			}
		},
		nodemon: {
			dev: {
				script: 'index.js'
			}
		},
		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			tasks: ['nodemon', 'typescript']
		} 
	});

	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-typescript');

	grunt.registerTask("default", ['concurrent']);

}