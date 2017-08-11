import path from 'path';
import loaders from './config/loaders';
import getPlugins from './config/plugins';
import './config/env';

const pkg = require('./package.json');
const ENV = process.env.NODE_ENV || 'development';
const DEV = ENV === 'development';
const PROD = ENV === 'production';

const plugins = getPlugins({
  ENV,
  DEV,
  PROD,
});

const entry = {
  polyfills: ['babel-polyfill', 'react-hot-loader/patch'],
  vendor: ['react', 'react-dom', 'react-redux',
    'react-router',
    'redux',
    'redux-observable',
		'moment',
		'react-datepicker',
   // 'superagent',
  ],
  main: process.env.NODE_ENV !== 'dev'
    ? ['./client/index.js']
    : ['webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/dev-server',
      './client/index.js']
};

export default {
  devtool: 'inline-source-map',
  entry,
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },

  resolve: {
    modules: [
      path.resolve('client'),
      'node_modules',
    ],
  },

  devServer: {
    contentBase: './public',
    stats: {
      colors: true,
      timings: true,
      quite: false,
      noInfo: false,
    },
    hot: true,
    historyApiFallback: true,
  },
  plugins,
  module: {
    rules: loaders,
  },
};
