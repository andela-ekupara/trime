var gulp = require('gulp'),
    less = require('gulp-less'),
    jade = require('gulp-jade'),
    nodemon = require('gulp-nodemon'),
    browserify = require('gulp-browserify'),
    path = require('path');

var paths = {
    public: 'public/**',
    images: 'app/images/**/*',
    scripts: 'app/**/*.js',
    styles: 'app/styles/*.+(less|css)'

};

gulp.task('less', function () {
    'use strict';
    gulp.src(paths.styles)
        .pipe(less({
            paths: [path.join(__dirname, './app/styles')]
        }))
        .pipe(gulp.dest('./public/css'));
});
