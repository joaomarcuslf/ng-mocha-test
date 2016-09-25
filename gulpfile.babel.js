'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import runsequence from 'run-sequence';
import jshint from 'gulp-jshint';
import babel from 'gulp-babel';

/* Tasks */

gulp.task('default', () => {
    gutil.log("Gulp is working fine");
    return gulp.src("./*.js")
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});