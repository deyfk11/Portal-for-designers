const path = require('path');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode,
  entry: './src/index.jsx',
  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },
  resolve: {
    alias: {
      services: path.resolve(__dirname, 'src/services/'),
      store: path.resolve(__dirname, 'src/store/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      components: path.resolve(__dirname, 'src/components/'),
      assets: path.resolve(__dirname, 'src/assets/'),
    },
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    hot: true,
    historyApiFallback: true,
    open: true,
    port: '3000',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
