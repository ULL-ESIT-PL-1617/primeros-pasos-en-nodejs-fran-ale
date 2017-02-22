
function generategb(){
  var exec = require('child_process').exec;
  var path = 'node_modules/.bin/gitbook build ./txt ./ghpages';

  exec(path, function(error, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    console.log(error);
  });
}

generategb();
