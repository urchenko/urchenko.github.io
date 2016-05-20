var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');

gulp.task('js:build', function () {
  'use strict';
  gulp.src(['js/jquery.color-2.1.0.js', 'js/jquery.jcarousel.js', 'js/script.js'])
    .pipe(concat('script.main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
});

gulp.task('css:build', function () {
  'use strict';
  return gulp.src(['css/reset.css', 'css/style.css'])
    .pipe(concat('style.main.css'))
    .pipe(gulp.dest('build/css/'))
    .pipe(rename({ suffix: '.min'}))
    .pipe(cssmin())
    .pipe(gulp.dest('build/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('image:build', function () {
  'use strict';
  return gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'));
});

gulp.task('browserSync', function() {
  'use strict';
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('build', ['js:build', 'css:build', 'image:build']);

gulp.task('watch', ['browserSync'], function() {
  'use strict';
  gulp.watch('js/**/*.js', ['js:build']);

  gulp.watch('css/**/*.css', ['css:build']);

  gulp.watch('img/**/*.*', ['image:build']);
});

gulp.task('dev', ['build', 'watch']);