const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


// Compile scss into css
function style() {
    return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
}

function vendorsJS() {
  return gulp.src(
    [
      'node_modules/jquery/dist/jquery.min.js'
    ]
  )
  .pipe(gulp.dest('js/vendors'))
  .pipe(browserSync.stream());
}

function vendorsCSS() {
  return gulp.src(
    [
      'node_modules/font-awesome/css/font-awesome.css'
    ]
  )
  .pipe(gulp.dest('css/vendors'))
  .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "./index.html"
        }
    });
    gulp.watch('scss/**/*.scss', style);
    gulp.watch('*.html').on('change',browserSync.reload);
    gulp.watch('js/**/*.js').on('change', browserSync.reload);
}

exports.vendorCSS = vendorsCSS;
exports.scripts = vendorsJS;
exports.style = style;
exports.watch = watch;
