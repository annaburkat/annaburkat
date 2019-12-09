const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


// Compile scss into css
function style() {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}

function vendorsJS() {
  return gulp.src(
    [
      'node_modules/jquery/dist/jquery.min.js'
    ]
  )
  .pipe(gulp.dest('src/js/vendors'))
  .pipe(browserSync.stream());
}

function vendorsCSS() {
  return gulp.src(
    [
      'node_modules/font-awesome/css/font-awesome.css'
    ]
  )
  .pipe(gulp.dest('src/css/vendors'))
  .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./src",
            index: "./index.html"
        }
    });
    gulp.watch('src/scss/**/*.scss', style);
    gulp.watch('src/*.html').on('change',browserSync.reload);
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
}

exports.vendorCSS = vendorsCSS;
exports.scripts = vendorsJS;
exports.style = style;
exports.watch = watch;
