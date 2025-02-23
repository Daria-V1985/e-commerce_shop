const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const sassCompiler = () => {
  return src('./assets/scss/*.scss')
    .pipe(sass())
    .pipe(dest('./assets/css'))
}

const watchTask = () => {
  watch(['main.scss'], sassCompiler)
}

exports.default = series(sassCompiler, watchTask);