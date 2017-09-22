'use strict';

var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('sass', function(){
    //do something
    return gulp.src('./scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
});
