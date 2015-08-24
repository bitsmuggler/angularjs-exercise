var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    notify = require('gulp-notify'),
    jasmine = require('gulp-jasmine'),
    reporters = require('jasmine-reporters'),
    jasmineBrowser = require('gulp-jasmine-browser');


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

gulp.task('default', function() {
    gulp.start('jshint', 'test');
});



