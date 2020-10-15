const gulp = require("gulp");
var concatCss = require('gulp-concat-css');
 
gulp.task('default', function () {
  return gulp.src('src/assets/css/*.css')
    .pipe(concatCss("main.css"))
    .pipe(gulp.dest('public/static/css'));
});
