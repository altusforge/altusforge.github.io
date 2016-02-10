// Node modules
var fs = require('fs'),
  vm = require('vm'),
  es = require('event-stream'),
  del = require('del'),
  path = require('path');

// Gulp and plugins
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  less = require('gulp-less');

var paths = {
  less: './less/elever.less',
  less_path: './less',
  dist_css: './css/'
}

gulp.task('less', function() {
  return gulp.src(paths.less)
          .pipe(less())
          .pipe(gulp.dest(paths.dist_css));
});

gulp.task('watch', ['less'], function() {
  // watch less files
  gulp.watch(paths.less_path + '/**/*', ['less']);
});

gulp.task('default', ['less'], function(callback) {
  callback();
  console.log('\nDONE');
});
