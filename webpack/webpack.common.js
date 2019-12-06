require('@babel/polyfill');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: ['@babel/polyfill', path.join(__dirname, './../src/index.tsx')],
  output: {
    filename: 'main.[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, './../dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        sideEffects: false
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[hash:base64]'
              },
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-preset-env')({stage: 0}),
                require('postcss-px-to-viewport')({
                  unitPrecision: 3,
                  viewportWidth: 375
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.join(__dirname, './../public/favicon.ico'),
      template: path.join(__dirname, './../public/index.html'),
      base: '/rh-institution/'
    })
  ]
};

module.exports = config;