var ghp = require('gulp-gh-pages');
var gulp = require('gulp');


gulp.task('build', function() {
	var exec = require('child_process').exec;

    exec("npm run create-gitbook", 
                function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });
});

gulp.task('deploy', function() {
  return gulp.src('./ghpage/**/*').pipe(ghp());
});

gulp.task('generate-deploy', ['build', 'deploy']);
