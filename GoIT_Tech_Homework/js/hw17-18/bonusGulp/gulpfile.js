'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var watch = require('gulp-watch');

gulp.task('js:build', function () {
  gulp.src(['js/jquery.color-2.1.0.js', 'js/jquery.jcarousel.js', 'js/script.js'])
    .pipe(concat('script.main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
});

gulp.task('css:build', function () {
  return gulp.src(['css/reset.css', 'css/style.css'])
    .pipe(concat('style.main.css'))
    .pipe(gulp.dest('build/css/'))
    .pipe(rename({ suffix: '.min'}))
    .pipe(cssmin())
    .pipe(gulp.dest('build/css/'));
});

gulp.task('image:build', () =>
  gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img/'));
);

gulp.task('build', [
  'js:build',
  'css:build',
  'image:build',
  'watch'
]);

gulp.task('watch', function(){
  watch(['js/**/*.js'], function() {
    gulp.start('js:build');
  });
  watch(['css/**/*.css'], function() {
    gulp.start('css:build');
  });
  watch(['img/**/*.*'], function() {
    gulp.start('image:build');
  });
});