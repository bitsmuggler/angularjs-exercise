var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    notify = require('gulp-notify'),
    jasmine = require('gulp-jasmine'),
    reporters = require('jasmine-reporters'),
    jasmineBrowser = require('gulp-jasmine-browser'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    serve = require('gulp-serve');

gulp.task('connect', function() {
    connect.server({
        livereload: true,
        root: ['.', '.tmp'],
        port: 9999
    });
});

gulp.task('jshint', function() {
    return gulp.src('app/js/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('test', function() {
    return gulp.src('tests/test.js')
        .pipe(jasmine());
});

gulp.task('default', ['jshint', 'test', 'connect']);



