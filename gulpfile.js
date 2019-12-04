const   gulp  = require('gulp'),
        sass  = require('gulp-sass'),
        browserSync  = require('browser-sync').create(),
        pug  = require('gulp-pug');


/**
 * Compile .pug files 
 */

function page() {
    return gulp.src('./src/*.pug')
            .pipe(pug({
                pretty: true
              }))
            .pipe(gulp.dest("./public"))
}
  

function style() {
    return gulp.src('./src/sass/**/*.sass')
            .pipe(sass())
            .pipe(gulp.dest('./public/css'))
            .pipe(browserSync.stream())

}

function watch() {
    browserSync.init({
        baseDir: "./public/"
    });
    gulp.watch('./src/*.pug', page);
    gulp.watch('./src/sass/**/*.sass', style);
}

exports.style = style;
exports.page = page;
exports.watch = watch;