const {src, dest, watch, series } = require('gulp')
const cleanCss = require('gulp-clean-css')
const sass = require('gulp-sass')(require('sass'))


function buildStyles() {
    return src('_styling_css/**/*.scss')
        .pipe(sass({
            includePaths: ['./node_modules'],
         }).on('error', sass.logError))
        .pipe(cleanCss())
        .pipe(dest('styles/'))
}

function watchTask() {
    watch(['_styling_css/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)
