const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const REGIONS = {
  DEV: '',
  ST: '',
  UAT: '',
  LOCAL: 'http://localhost:9900'
};

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/rh-institution/',
    historyApiFallback: {
      index: '/rh-institution/index.html'
    },
    host: '0.0.0.0',
    hot: true,
    open: true,
    port: 9900,
    proxy: {
      '/api': {
        target: REGIONS.DEV,
        changeOrigin: true
      }
    },
  }
});