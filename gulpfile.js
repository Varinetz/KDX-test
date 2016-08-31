var gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    less = require('gulp-less'),
    path = require('path'),
    clean = require('gulp-clean'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    runSequence = require('run-sequence'),
    prefix = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();


// livereload 

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "source"
        }
    });
});
 
// Bower

gulp.task('bower', function () {
  gulp.src('source/index.html')
    .pipe(wiredep({
      'directory' : 'source/bower_components/'
    }))
    .pipe(gulp.dest('source'));
});
 
 // Build

gulp.task('build', function(callback) {
  runSequence('clean',
                'less',
                'html', 
                'image',
                'copy',
              callback);
});

gulp.task('clean', function () {
    return gulp.src('production',{read: false})
        .pipe(clean());
});

gulp.task('html', function () {
    var assets = useref.assets();
 
    return gulp.src('source/*.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', prefix('last 3 versions', 'ie9', '>1%' )))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('production'));
});

gulp.task('less', function () {
  return gulp.src('source/s/main.less')
    .pipe(less())
    .pipe(gulpif('*.css', prefix('last 3 versions', 'ie9', '>1%' )))
    .pipe(gulp.dest('source/s'))
    .pipe(browserSync.stream());
});


gulp.task('image', function () {
  return gulp.src('source/img/*')
        .pipe(imagemin({ 
            optimizationLevel: 3,
            interlaced: true
        }))
        .pipe(gulp.dest('production/img'));
});

gulp.task('copy', function() {
    return gulp.src(['source/bower_components/components-font-awesome/fonts/*'])
    .pipe(gulp.dest('production/fonts'));
});

// Watch

gulp.task('watch', function() {
    gulp.watch('bower.json', ['bower']);
    gulp.watch('source/s/*.less', ['less']);
    gulp.watch('source/img/*', ['image']);
    gulp.watch(['source/js/*.js', 'source/*.html', 'source/img/*']).on('change', browserSync.reload);
})

// default

gulp.task('default', ['watch', 'browser-sync']);