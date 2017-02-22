
var ghp = require('gh-pages');
var path = require('path');
var json = require ('../package.jso');

ghp.publish(path.join(__dirname, '/../txt'), { repo: json.require.url,
												message: 'Commit from deploy-gitbook.js',
												 }, function(param){ if(param) console.log(param);});