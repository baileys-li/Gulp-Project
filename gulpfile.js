"use strict";

const gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync").create(),
  pug = require("gulp-pug"),
  pugbem = require("gulp-pugbem"),
  minify = require("gulp-csso"),
  imagemin = require("gulp-imagemin"),
  webp = require("gulp-webp");

//** Compile .pug files **/
gulp.task("pug", function() {
  return gulp
    .src("./src/pages/*.pug")
    .pipe(
      pug({
        pretty: true,
        plugins: [pugbem]
      })
    )
    .pipe(gulp.dest("./public"));
});

//** Compile .sass files **/

gulp.task("sass", function() {
  return gulp
    .src("./src/sass/*.sass")
    .pipe(sass())
    .pipe(minify())
    .pipe(gulp.dest("./public/css"))
    .pipe(browserSync.stream());
});

//** Image Optimization **/
gulp.task("images", function() {
  return gulp
    .src("./src/img/**/*.{png,jpg,svg}")
    .pipe(
      imagemin([
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.svgo()
      ])
    )
    .pipe(gulp.dest("./public/img"));
});

gulp.task("webp", function() {
  return gulp
    .src("./src/img/**/*.{png,jpg}")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("./public/img"));
});

//** Other tasks **/

gulp.task("watch", function() {
  gulp.watch("./src/**/**/*.pug", gulp.series("pug"));
  gulp.watch("./src/sass/**/*.sass", gulp.series("sass"));
});

gulp.task("serve", function() {
  browserSync.init({
    server: {
      baseDir: "./public"
    }
  });
  browserSync.watch("public", browserSync.reload);
});

gulp.task(
  "default",
  gulp.series(gulp.parallel("pug", "sass"), gulp.parallel("watch", "serve"))
);
