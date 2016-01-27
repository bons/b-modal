import babel from 'gulp-babel'

export default (gulp, options) => {
    gulp.task('build-project', () => {
      return gulp.src(options.src)
        .pipe(babel({optional: ['es7.decorators']}))
        .pipe(gulp.dest(options.dest))
    })
}
