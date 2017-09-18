var gulp = require('gulp'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch');

swallowError function(err) {
    console.log(err);
    this.emit('end');
}

gulp.task('js', function() {
    gulp.src('src/*.js')
        .pipe()
});