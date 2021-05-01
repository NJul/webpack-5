const path = require('path');
const HtmlWebpacPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpacPlugin({
      title: 'Webpack tutorial',
    }),
  ],
};
