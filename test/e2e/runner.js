process.env.NODE_ENV = 'testing';

const webpack = require('webpack');
const DevServer = require('webpack-dev-server');

let opts = process.argv.slice(2);
if (opts.indexOf('--config') === -1) {
  opts = opts.concat(['--config', 'test/e2e/nightwatch.conf.js']);
}
if (opts.indexOf('--env') === -1) {
  opts = opts.concat(['--env', 'chrome']);
}

const spawn = require('cross-spawn');
const runner = spawn('./node_modules/.bin/nightwatch', opts, { stdio: 'inherit' });

runner.on('exit', function (code) {
  process.exit(code);
});

runner.on('error', function (err) {
  throw err;
});
