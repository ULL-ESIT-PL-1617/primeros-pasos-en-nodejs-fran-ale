var ghp = require('gulp-gh-pages');
var gulp = require('gulp');



gulp.task('deploy', function() {
  return gulp.src('./ghpage/**/*').pipe(ghp());
});
