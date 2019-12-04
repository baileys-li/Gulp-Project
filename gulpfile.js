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

// function watch() {
//     browserSync.init({
//         baseDir: "./public"
//     });
//     gulp.watch('./src/*.pug', page);
//     gulp.watch('./src/sass/**/*.sass', style);
// }

// exports.watch = watch;