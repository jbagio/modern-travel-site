# Documentation in progress!

# Modern Travel Site
Website built during [Brad Schiff's Mastering the Modern Workflow course](https://www.udemy.com/git-a-web-developer-job-mastering-the-modern-workflow/).

## Mobile-first design
* Responsive web design with efficiency and performance in mind
* Treat CSS mobile styles as baseline and use media queries for larger screens
* Responsive images to address different cropping layouts and resolution switching
* Icon sprites
* Images / sprites lazy loading
* Reveal page elements on scroll via waypoints

## Modular CSS architecture
* [BEM](http://getbem.com/introduction/) convention
* PostCSS pre-processing with autoprefixer, simple variables, nested rules, import, mixins and hexrgba plugins

## Modular JavaScript architecture
* Custom elements (header, mobile menu, page waypoints and modal) built with ES6 classes and modules
* Module bundling via Webpack and transpiling via Babel

## Automated development workflow
* Gulp tasks
  * JS bundling (Webpack)
  * CSS transformation and injection (PostCSS)
  * Image sprite (re)generation
  * BrowserSync live reloading
  * Custom Modernizr build via [gulp-modernizr](https://github.com/rejas/gulp-modernizr)
  * Final build task with [image files optimization](https://github.com/sindresorhus/gulp-imagemin), files [revisioning](https://github.com/sindresorhus/gulp-rev) and [CSS](https://github.com/ben-eb/gulp-cssnano) / [JS](https://github.com/terinjokes/gulp-uglify) minification

## Support for legacy browsers
* Support for responsive images via [Picturefill](https://github.com/scottjehl/picturefill) image polyfill
* SVG to PNG conversion
* Flexbox layout support

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE.txt)
