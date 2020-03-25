"use strict";

const gulp = require("gulp"),
  sass = require("gulp-sass"),
  minify = require("gulp-csso"),
  autoprefixer = require("gulp-autoprefixer"),
  pug = require("gulp-pug"),
  pugbem = require("gulp-pugbem"),
  browserSync = require("browser-sync").create(),
  imagemin = require("gulp-imagemin"),
  webp = require("gulp-webp");

//** Compile .pug files **/
gulp.task("pug", function () {
  return gulp
    .src("./src/pages/*.pug")
    .pipe(
      pug({
        pretty: true,
        plugins: [pugbem]
      })
    )
    .pipe(gulp.dest("./"));
});

//** Compile .sass files **/

gulp.task("sass", function () {
  return gulp
    .src("./src/sass/*.sass")
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(minify())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

//** Image Optimization **/
gulp.task("images", function () {
  return gulp
    .src("./src/img/**/*.{png,jpg,svg}")
    .pipe(
      imagemin([
        imagemin.optipng({
          optimizationLevel: 3
        }),
        imagemin.jpegtran({
          progressive: true
        }),
        imagemin.svgo()
      ])
    )
    .pipe(gulp.dest("./img"));
});

gulp.task("webp", function () {
  return gulp
    .src("./src/img/**/*.{png,jpg}")
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest("./img"));
});

//** Other tasks **/

gulp.task("watch", function () {
  gulp.watch("./src/**/**/*.pug", gulp.series("pug"));
  gulp.watch("./src/sass/**/*.sass", gulp.series("sass"));
});

gulp.task("serve", function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task(
  "default",
  gulp.series(gulp.parallel("pug", "sass"), gulp.parallel("watch", "serve"))
);
