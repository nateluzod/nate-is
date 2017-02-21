'use strict';

import moduleImporter from 'sass-module-importer';
import evilIcons from 'gulp-evil-icons';
import browserSync from 'browser-sync';
import sassGlob from 'gulp-sass-glob';
import watch from 'gulp-watch';
import sass from 'gulp-sass';
import gulp from 'gulp';

const PATHS = {
  sass: './craft/assets/**/*.scss',
  twig: './craft/templates/**/*.html'
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

// Icons
gulp.task('icons', () => {
  return gulp.src('./craft/templates/_base.html')
    .pipe(evilIcons())
    .pipe(gulp.dest('./craft/templates/'));
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
gulp.task('default', ['sass', 'icons', 'watch']);
