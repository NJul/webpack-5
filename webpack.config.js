const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}

module.exports = {
  // mode defaults to 'production' if not set
  mode: mode,
  target: target,

  // entry not required if using `src/index.js` default
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  // output not required if using `dist/main.js` default
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          // sass-loader should be at the bottom
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack tutorial',
    }),
    new MiniCssExtractPlugin(),
  ],

  // devtool: 'source-map',
  devtool: false,

  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
  },
};
