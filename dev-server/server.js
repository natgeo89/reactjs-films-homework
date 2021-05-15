const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHMR = require('webpack-hot-middleware');

const config = require('../config/webpack/webpack.dev');

const app = express();
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
);

app.use(webpackHMR(compiler));

app.listen(3000);
