var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', () => {

  browserSync.init({
      notify: false,
      server: {
      baseDir: "./"
    }
  });

  watch('./index.html', () => {
    browserSync.reload();
  });
  watch('./src/styles/**/*.scss', () => {
    gulp.start('cssInject');
  });
});

gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./dist/styles/styles.css')
  .pipe(browserSync.stream());
});

