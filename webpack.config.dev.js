var path = require('path');
var webpack = require('webpack');
var cssnext = require('postcss-cssnext');
var postcssFocus = require('postcss-focus');
var postcssReporter = require('postcss-reporter');
var SplitByPathPlugin = require('webpack-split-by-path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: [
      'eventsource-polyfill',
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './client/index.js',
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },

  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: 'http://0.0.0.0:8000/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'client'),
      'node_modules',
    ],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'isomorphic-style-loader'},
          {
            loader: 'css-loader',
            options:{
              localIdentName: '[name]__[local]__[hash:base64:5]',
              modules: true,
              importLoaders: 1,
              sourceMap: true
            }
          },
          { loader: 'postcss-loader'}
        ],
      }, {
        test: /\.css$/,
        include: /node_modules/,
        use: [{ loader: 'style-loader'}, { loader: 'css-loader'}],
      }, {
        test: /\.jsx*$/,
        exclude: [/node_modules/, /.+\.config.js/],
        loader: 'babel-loader',
      }, {
        test: /\.(jpe?g|gif|png|svg)$/i,
        loader: 'url-loader?limit=10000',
      },
    ],
  },

  plugins: [
    // new SplitByPathPlugin(
    //   [{ name: 'vendor', path: __dirname + '/node_modules' }],
    //   { ignore: [__dirname + '/node_modules/css-loader'] }
    // ),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        debug: true,
        postcss: () => [
          postcssFocus(),
          cssnext({
            browsers: ['last 2 versions', 'IE > 10'],
          }),
          postcssReporter({
            clearMessages: true,
          }),
        ],
      }
    })
  ],
};
