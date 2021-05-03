const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    // this places all images processed in an image folder
    assetModuleFilename: 'assets/images/[hash][ext][query]',
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          'css-loader',
          'postcss-loader',
          // sass-loader should be at the bottom
          'sass-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // devtool: 'source-map',
  devtool: false,

  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
  },
};
