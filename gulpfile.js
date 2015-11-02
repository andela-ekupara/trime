var gulp = require('gulp'),
  less = require('gulp-less'),
  gutil = require('gulp-util'),
  jshint = require('jshint'),
  jade = require('gulp-jade'),
  nodemon = require('gulp-nodemon'),
  browserify = require('gulp-browserify'),
  source = require('vinyl-source-stream'),
  imagemin = require('gulp-imagemin'),
  path = require('path');

var paths = {
  public: 'public/**',
  images: 'app/images/**/*',
  scripts: 'app/**/*.js',
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
  return gulp.src(['./app/**/*.js', './index.js', +
      './server/**/*.js', './tests/**/*.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('nodemon', function() {
  nodemon({
      script: 'app.js',
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

gulp.task('browserify', function() {
  return browserify('./app/scripts/application.js').bundle()
    .on('success', gutil.log.bind(gutil, 'Browserify Rebundled'))
    .on('error', gutil.log.bind(gutil, 'Browserify ' +
      'Error: in browserify gulp task'))
    // vinyl-source-stream makes the bundle compatible with gulp
    .pipe(source('application.js')) // filename
    // Output the file
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('build', ['jade', 'less', 'static-files',
  'images', 'browserify'
]);

gulp.task('watch', function() {
  gulp.watch(paths.jade, ['jade']);
  gulp.watch(paths.styles, ['less']);
  gulp.watch(paths.scripts, ['browserify']);
});

gulp.task('production', ['nodemon', 'build']);
gulp.task('default', ['nodemon', 'watch', 'build']);
