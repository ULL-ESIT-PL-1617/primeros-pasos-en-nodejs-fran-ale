var path = require ('path');
var fs = require ('fs');
var exec = require('child_process').exec;
var args = process.argv;
var dir = path.dirname(cmdline[1]);

function usage () {
  fs.readdir(dir, function (err, files){
    files.forEach(function (value,){
      console.log(value);
    });
  });
}

function main (){
  if (args.length < 3)
    usage();
  else
    fs.readdir(dir, function(err, files){
      if (files.indexOf(args[2]) >= 0)
        exec(dir + "/" + args[2], function(error, stdout, stderr){  console.log('exec: ' + stdout);
                                                                    if (error !== null) console.log('exec error: ' + error);
                                                                  });
      else
        usage();
    });
}

main();
