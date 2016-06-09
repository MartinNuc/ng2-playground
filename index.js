require('reflect-metadata');
require('zone.js');

require('./src/main');

// index html
require('file?name=[name].[ext]!./index.html');