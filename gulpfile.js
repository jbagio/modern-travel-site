const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('default', function () {
  console.log('Default task');
});

gulp.task('html', function () {
  console.log('html task');
});

gulp.task('styles', function () {
  console.log('styles task');
});

gulp.task('watch', function () {
  watch('./app/index.html', function () {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('styles');
  });
});
