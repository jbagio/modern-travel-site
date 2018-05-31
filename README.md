# Modern Travel Site
Website built during [Brad Schiff's Mastering the Modern Workflow course](https://www.udemy.com/git-a-web-developer-job-mastering-the-modern-workflow/).

## Mobile-first design
* Responsive web design with efficiency and performance in mind
* Treat CSS mobile styles as baseline and use media queries for larger screens
* Responsive images to address different cropping layouts and resolution switching
* Icon sprites
* Images / sprites [lazy loading](https://github.com/aFarkas/lazysizes)
* Reveal page elements on scroll via [waypoints](https://github.com/imakewebthings/waypoints)

## Modular CSS architecture
* [BEM](http://getbem.com/introduction/) convention
* Block elements split into different modules

## Modular JavaScript architecture
* Custom page elements (header, mobile menu, page waypoints and modal) built with ES6 classes and modules
* Module bundling via [Webpack](https://github.com/webpack/webpack) and transpiling via [Babel](https://github.com/babel/babel-loader)

## Automated development workflow with Gulp
* PostCSS pre-processing with the following plugins:
  * [Mixins](https://github.com/postcss/postcss-mixins)
  * [@import rules](https://github.com/postcss/postcss-import)
  * [Variables](https://github.com/postcss/postcss-simple-vars)
  * [Nested rules](https://github.com/postcss/postcss-nested)
  * Vendor prefixes automatically added via [autoprefixer](https://github.com/postcss/autoprefixer)
  * Use [hex values inside rgba()](https://github.com/seaneking/postcss-hexrgba)
* [BrowserSync](https://github.com/Browsersync/browser-sync) live reloading
* JS bundling
* Image sprite (re)generation
* Custom Modernizr build via [gulp-modernizr](https://github.com/rejas/gulp-modernizr)
* Final build task with [image files optimization](https://github.com/sindresorhus/gulp-imagemin), files [revisioning](https://github.com/sindresorhus/gulp-rev) and [CSS](https://github.com/ben-eb/gulp-cssnano) / [JS](https://github.com/terinjokes/gulp-uglify) minification

## Support for legacy browsers
* Support for responsive images via [Picturefill](https://github.com/scottjehl/picturefill) image polyfill
* SVG to PNG conversion
* Flexbox layout support

## Live site
Site can be viewed [here](https://jbagio.github.io/modern-travel-site/).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE.txt)
