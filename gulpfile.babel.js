'use strict';

import moduleImporter from 'sass-module-importer';
import browserSync from 'browser-sync';
import sassGlob from 'gulp-sass-glob';
import uglify from 'gulp-uglifyjs';
import concat from 'gulp-concat';
import watch from 'gulp-watch';
import sass from 'gulp-sass';
import gulp from 'gulp';

const PATHS = {
  sass: './craft/assets/**/*.scss',
  twig: './craft/templates/**/*.html',
  js:   [
    './node_modules/prismjs/prism.js'
  ]
};

// SASS
gulp.task('sass', () => {
  return gulp.src('./craft/assets/main.scss')
    .pipe(sassGlob())
    .pipe(sass({
      importer: moduleImporter(),
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(browserSync.stream({
      match: '**/*.css'
    }))
    .pipe(gulp.dest('./public/assets/'));
});

// JS
gulp.task('js', function() {
  return gulp.src(PATHS.js)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/assets/'));
});

// 0_0
gulp.task('watch', () => {
  browserSync.init({
      proxy: 'localhost:8000',
      port: 3001
  });
  gulp.watch(PATHS.sass, ['sass']);
  gulp.watch(PATHS.twig)
    .on('change', () => {
      browserSync.reload()
  });
});


// ¯\_(ツ)_/¯
gulp.task('default', ['sass', 'watch']);
