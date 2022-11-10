var gulp = require('gulp')
var sass = require('gulp-sass')(require('sass'))
var webserver = require('gulp-webserver');

gulp.task('scss', () => {
    return gulp.src('scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
})

gulp.task('webserver', () => {
    return gulp.src('./')
    .pipe(webserver({
        livereload: true,
        open: true
    }))
})

gulp.task('watch', () => {
    gulp.watch('scss/**/*.scss', gulp.series('scss'))
})

gulp.task('default', 
    gulp.parallel('scss', 'watch', 'webserver')
)