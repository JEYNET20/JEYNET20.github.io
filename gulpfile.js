var gulp = require("gulp")

var scss = require("gulp-sass")

var minCss = require("gulp-clean-css")
var minJS = require("gulp-uglify")

var rename = require("gulp-rename")
var concat = require("gulp-concat")
var plumber = require("gulp-plumber")

var browserSync = require("browser-sync")

gulp.task("html", function() {
  return gulp
    .src("app/*.html")
    .pipe(plumber())
    .pipe(browserSync.reload({ stream: true }))
})

// style
gulp.task("style", function() {
  return gulp
    .src("app/scss/*.scss")
    .pipe(plumber())
    .pipe(scss())
    .pipe(concat("style.css"))
    .pipe(gulp.dest("app/css/"))
    .pipe(minCss())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("app/css/"))
    .pipe(browserSync.reload({ stream: true }))
})


// style media
gulp.task("styleMedia", function() {
  return gulp
    .src("app/scss/media/*.scss")
    .pipe(plumber())
    .pipe(scss())
    .pipe(concat("style.css"))
    .pipe(gulp.dest("app/css/media/"))
    .pipe(minCss())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("app/css/media/"))
    .pipe(browserSync.reload({ stream: true }))
})


// js
gulp.task("js", function() {
  return gulp
    .src("app/js/**/*.js")
    .pipe(plumber())
    .pipe(minJS())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("app/js/.min/"))
    .pipe(browserSync.reload({ stream: true }))
})

// serve
gulp.task("serve", function() {
  browserSync({
    server: {
      baseDir: "app/",
    },
    // notify: false
  })
})

//  watch
gulp.task("watch", function() {
  gulp.watch("app/*.html", gulp.parallel("html"))
  gulp.watch("app/scss/*.scss", gulp.parallel("style"))
  gulp.watch("app/scss/media/*.scss", gulp.parallel("styleMedia"))
  gulp.watch("app/js/**/*.js", gulp.parallel("js"))
})

// default
gulp.task("default", gulp.parallel("style", "styleMedia", "js", "serve", "watch"))
