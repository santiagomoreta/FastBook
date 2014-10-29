'use strict';
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var inline = require('gulp-inline');
var karma = require('gulp-karma');

var files = ['src/*.js', 'tests/spec/*.js'];

gulp.task('lint', function() {
  return gulp.src(files)
    .pipe(jshint.extract('always'))
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build', function() {
  return gulp.src('src/app-router.js')
    .pipe(uglify())
    .pipe(gulp.dest('.'));
});

gulp.task('minify', function() {
  return gulp.src('src/app-router.html')
    .pipe(inline({
      base: 'src',
      js: uglify()
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('test', function() {
  return gulp.src(files)
    .pipe(karma({
      configFile: 'tests/karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // make sure failed tests cause gulp to exit non-zero
      console.log(err);
    });
});

// watch
gulp.task('watch', function() {
  gulp.watch(files,['lint', 'build', 'minify', 'test'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

// default
gulp.task('default', function() {
  gulp.run('watch', 'lint', 'build', 'minify', 'test');
});

// Travis CI
gulp.task('ci', function(){
  gulp.run('lint');
});
