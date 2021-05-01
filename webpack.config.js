const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  // mode defaults to 'production' if not set
  mode: mode,

  // entry not required if using `src/index.js` default
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  // output not required if using `dist/main.js` default
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack tutorial',
    }),
  ],
  module: {
    rules: [
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  // devtool: 'source-map',
  devtool: false,

  devServer: {
    contentBase: './dist',
    open: true,
  },
};
