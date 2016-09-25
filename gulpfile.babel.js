'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import babel from 'gulp-babel';
import mocha from 'gulp-mocha';

/* Tasks */

gulp.task('default', () => {
  gutil.log("Gulp is working fine");
});

gulp.task('test', () => {
  gutil.log("Running your specs files");
  return gulp
    .src('./spec/**/*.spec.babel.js')
    .pipe(babel())
    .pipe(mocha());
});