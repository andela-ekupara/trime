var gulp = require('gulp'),
  less = require('gulp-less'),
  gutil = require('gulp-util'),
  jshint = require('jshint'),
  bower = require('gulp-bower'),
  jade = require('gulp-jade'),
  nodemon = require('gulp-nodemon'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  imagemin = require('gulp-imagemin'),
  path = require('path'),
  reactify = require('reactify'),
  babelify = require('babelify');

var paths = {
  public: 'public/**',
  images: 'app/images/**/*',
  scripts: 'app/**/*.+(jsx|js)',
  styles: 'app/styles/*.+(less|css)',
  jade: ['!app/shared/**', 'app/**/*.jade']
};

gulp.task('less', function() {
  gulp.src(paths.styles)
    .pipe(less({
      paths: [path.join(__dirname, './app/styles')]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('jade', function() {
  gulp.src(paths.jade)
    .pipe(jade())
    .pipe(gulp.dest('./public/'));
});

gulp.task('lint', function() {
  return gulp.src(['./app/**/*.+(js|jsx)', './index.js', +
      './server/**/*.js', './tests/**/*.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('nodemon', function() {
  nodemon({
      script: 'index.js',
      ext: 'js',
      ignore: ['public/', 'node_modules/']
    })
    .on('change', ['lint'])
    .on('restart', function() {
      console.log('>> node restart');
    });
});

gulp.task('images', function() {
  gulp.src(paths.images)
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('./public/images/'));
});

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('public/lib/'));
});

gulp.task('browserify', function() {
  var bundler = browserify({
    entries: ['./app/scripts/app.jsx'],
    debug: true,
    fullPaths: true,
    transform: [reactify, babelify]
  });

  bundler.bundle()
    .on('success', gutil.log.bind(gutil, 'Browserify Rebundled'))
    .on('error', gutil.log.bind(gutil, 'Browserify ' +
      'Error: in browserify gulp task'))
    // vinyl-source-stream makes the bundle compatible with gulp
    .pipe(source('app.js')) // filename
    // Output the file
    .pipe(gulp.dest('./public/js/'));
  return bundler;
});


gulp.task('watch', function() {
  gulp.watch(paths.jade, ['jade']);
  gulp.watch(paths.styles, ['less']);
  gulp.watch(paths.scripts, ['browserify']);
});


gulp.task('production', ['build']);
gulp.task('heroku:production', ['production']);
gulp.task('heroku:staging', ['production']);
gulp.task('default', ['nodemon', 'watch', 'build']);
gulp.task('build', ['jade', 'less',
  'images', 'browserify', 'bower'
]);
