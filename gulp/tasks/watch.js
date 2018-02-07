var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', () => {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "src"
    }
  });

  watch('./src/index.html', () => {
    browserSync.reload();
  });
  watch('./src/styles/**/*.css', () => {
    gulp.start('cssInject');
  });
  

});

gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./src/temp/styles/styles.css')
  .pipe(browserSync.stream());
});

