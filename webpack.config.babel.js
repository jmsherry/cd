var path = require('path');
var cssnext = require('postcss-cssnext');
var postcssFocus = require('postcss-focus');
var postcssReporter = require('postcss-reporter');
var SplitByPathPlugin = require('webpack-split-by-path');

var cssModulesIdentName = '[name]__[local]__[hash:base64:5]';
if (process.env.NODE_ENV === 'production') {
  cssModulesIdentName = '[hash:base64]';
}

module.exports = {
  output: {
    publicPath: '/',
    libraryTarget: 'commonjs2',
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
          { loader: 'isomorphic-style-loader' },
          {
            loader: 'css-loader',
            options: {
              localIdentName: cssModulesIdentName,
              modules: true,
              importLoaders: 1,
              sourceMap: true,
            }
          },
          { loader: 'postcss-loader' }
        ],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
        loader: 'url-loader?limit=10000',
      },
    ],
  },
  plugins: [
    // new SplitByPathPlugin(
    //   [{ name: 'vendor', path: __dirname + '/node_modules' }],
    //   { ignore: [__dirname + '/node_modules/css-loader'] }
    // ),
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
