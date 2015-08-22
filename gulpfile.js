var gulp = require('gulp'), jshint = require('gulp-jshint'), notify = require('gulp-notify');

gulp.task('scripts', function() {
    return gulp.src('app/js/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(notify({ message: 'Scripts task complete' }));
});


gulp.task('default', function() {
    gulp.start('scripts');
});
