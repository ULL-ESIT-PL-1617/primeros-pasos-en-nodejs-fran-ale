var gulp = require('gulp');
var ghpages = require('gulp-gh-pages');
var buildBranch = require('gulp-build-branch');

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
  var cmd = 'cd src/primeros-pasos-en-nodejs-fran-ale && git pull && npm install && node app.js'
  sshexec(cmd, 'usuario@10.6.129.208').pipe(process.stdout);
});

gulp.task('update-heroku', function(){
  var exec = require('child_process').exec;
  exec('git add -A && git commit -m "Actualizando herokuapp" && git push origin master && git push heroku master', function(err, out, errout){
    if(err){
      console.log('Err:' + err);
    } else {
      console.log('Output: \n' + out + '\n');
    }
  });
});

gulp.task('deploy-gitbook', ['build'], function() {
  return buildBranch({ branch: 'gitbook', folder: 'book', commit : 'Desplegando libro' });
});

gulp.task('update-gitbook', function(){
  var exec = require('child_process').exec;
  exec('git checkout gitbook && git add -A && git commit -m "Actualizando gitbook" && git push origin gitbook && git push gbook gitbook', function(err, out, errout){
    if(err){
      console.log('Err:' + err);
    } else {
      console.log('Output: \n' + out + '\n');
    }
  });
})
