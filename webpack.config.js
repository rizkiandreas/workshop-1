const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./libs/parts');

const PATH = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const common = {
  entry: {
    app: PATH.app,
  },

  output: {
    path: PATH.build,
    filename: '[name].js',
  },

};

let config;

switch (process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common,
      parts.babelLoader(),
      parts.cssLoader(PATH.app)
    );
    break;
  default:
    config = merge(
      common,
      parts.babelLoader(),
      parts.cssLoader(),
      parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT
      })
    );
}

module.exports = validate(config);
