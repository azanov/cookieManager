var
	gulp = require('gulp'),
	gutil = require('gulp-util'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	jscs = require('gulp-jscs'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	mocha = require('gulp-mocha');

require('mocha-clean');

gulp.task('uglify', function () {
	gulp.src(['cookieManager.js'])
		.pipe(uglify({preserveComments: 'some'}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./'));
});

gulp.task('jscs', function () {
	gulp.src(['cookieManager.js'])
		.pipe(jscs().on('error', function (error) {
			gutil.log(error.message);

			this.emit('end');
		}));
});

gulp.task('jshint', function () {
	gulp.src(['cookieManager.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function () {
	gulp.watch('cookieManager.js', ['default']);
});

gulp.task('default', [
	'uglify',
	'jscs',
	'jshint'
]);
