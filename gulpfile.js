'use strict';

const   gulp  = require('gulp'),
        sass  = require('gulp-sass'),
        browserSync  = require('browser-sync').create(),
        pug  = require('gulp-pug');


/**
 * Compile .pug files 
 */

 gulp.task('pug', function () {
     return gulp.src('./src/pages/*.pug')
            .pipe(pug({
                pretty: true
              }))
            .pipe(gulp.dest("./public"))
 })
/**
 * Compile .sass files 
 */
gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.sass')
            .pipe(sass())
            .pipe(gulp.dest('./public/css'))
})

gulp.task('watch', function () {
    gulp.watch('./src/**/**/*.pug', gulp.series('pug'));
    gulp.watch('./src/sass/**/*.sass', gulp.series('sass'));
})

