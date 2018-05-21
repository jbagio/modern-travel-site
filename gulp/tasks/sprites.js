const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

let config = {
  mode: {
    css: {
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
};

gulp.task('createSprite', () => {
  return gulp.src('./app/assets/images/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});
