var gulp = require('gulp');
var ghpages = require('gulp-gh-pages');

gulp.task('gen-book', function(){
  var exec = require('child_process').exec;
  var fullpath = require('path').resolve() + '\\node_modules\\.bin\\';
  var command  = 'gitbook build ./book ./ghpages'

  exec(fullpath + command, function(err, out, errout){
    if(err){
      console.log('Err:' + err);
    } else {
      console.log('Output: \n' + out + '\n');
    }
  })
});

gulp.task('deploy-ghpages', function () {
  return gulp.src('./ghpages/**/*').pipe(ghpages({"message" : ' ghpages deployed'}));
});

gulp.task('deploy-iaas', function(){
  var sshexec = require('ssh-exec');
  var cmd = 'cd src/nodejs-test && git pull && npm install && node app.js'
  sshexec(cmd, 'usuario@10.6.129.208').pipe(process.stdout);
});

<<<<<<< HEAD
gulp.task('update-heroku', function(){
  var exec = require('child_process').exec;

  exec('git add . && git commit -m "Actualizando herokuapp" && git push origin master && git push heroku master', function(err, out, errout){
    if(err){
      console.log('Err:' + err);
    } else {
      console.log('Output: \n' + out + '\n');
    }
  });
})
=======
gulp.task('generate-deploy', ['build', 'deploy']);
>>>>>>> 65e519847c5b1577b8798aa6efb49977a0927258
