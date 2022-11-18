var gulp = require('gulp')
var sass = require('gulp-sass')(require('sass'))
// var concat = require('gulp-concat')
var webserver = require('gulp-webserver');


gulp.task('template', () => {
    return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
})

gulp.task('scripts', () => {
    return gulp.src('src/js/*.js')
    // .pipe(concat('scripts.js'))
    .pipe(gulp.dest('dist'))
})

gulp.task('styles', () => {
    return gulp.src('src/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'))
})

gulp.task('assets', () => {
    return gulp.src('src/assets/**')
    .pipe(gulp.dest('dist/assets'))
})

gulp.task('webserver', () => {
    return gulp.src('dist')
    .pipe(webserver({
        livereload: true,
        open: true
    }))
})

gulp.task('watch', () => {
    gulp.watch('src/index.html', gulp.series('template'))
    gulp.watch('src/js/scripts.js', gulp.series('scripts'))
    gulp.watch('src/scss/**/*.scss', gulp.series('styles'))
    gulp.watch('src/assets/**', gulp.series('assets'))
})

gulp.task('default', 
    gulp.parallel(
        'template', 
        'styles', 
        'scripts',
        'assets',
        'webserver',
        'watch', 
    )
)