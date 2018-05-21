const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');
const del = require('del');

let config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite-template.css'
        }
      }
    }
  }
};

gulp.task('beginClean', () => del(['./app/temp/sprite', './app/assets/images/sprites']));

gulp.task('createSprite', ['beginClean'], () => {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteSVG', ['createSprite'], () => {
  return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], () => {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteSVG', 'copySpriteCSS'], () => del(['./app/temp/sprite']));

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteSVG', 'copySpriteCSS', 'endClean']);
