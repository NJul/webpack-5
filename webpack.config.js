const path = require('path');
const HtmlWebpacPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    open: true,
  },
  plugins: [
    new HtmlWebpacPlugin({
      title: 'Webpack tutorial',
    }),
  ],
};
