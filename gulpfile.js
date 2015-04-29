var gulp = require('gulp'),
  minifyCSS = require('gulp-minify-css'),
  sass = require('gulp-sass'),
  browserify = require('gulp-browserify'),
  browserSync = require('browser-sync'),
  path = require('path');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: path.join(__dirname, 'build')
    },
    host: 'localhost',
    port: 1337,
    open: false
  });
});

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('scripts', function() {
  gulp.src('js/fizzion.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production
    }))
    .pipe(gulp.dest('./build/js/'))
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('js/**/*.js', ['scripts']);
});

gulp.task('default', ['watch']);
