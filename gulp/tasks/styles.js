var gulp, sass, sourcemaps, autoprefixer;
gulp = require('gulp');
sass = require('gulp-sass');
sourcemaps = require('gulp-sourcemaps');
autoprefixer = require('gulp-autoprefixer');


var input = './src/styles/**/*scss';
var output = './dist/styles/';
var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('styles', () => {
  return gulp
      .src(input)
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(gulp.dest(output));
  });