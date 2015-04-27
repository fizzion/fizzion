var gulp = require('gulp'),
  minifyCSS = require('gulp-minify-css'),
  sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);